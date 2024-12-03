import express, { json } from "express";
import { createServer } from "http"; // For creating the HTTP server
import { Server } from "socket.io"; // For Socket.IO integration
import conversationRouter from "./src/router/conversationRouter.js";
import messageRouter from "./src/router/messageRouter.js";
import { connectDB } from "./db/connectDB.js";
import userRouter from "./src/router/userRouter.js";
import cors from "cors";
import testRouter from "./src/router/testRouter.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(json());
app.use(cors());

// Database connection
connectDB();

// Routers
app.use("/conversation", conversationRouter);
app.use("/message", messageRouter);
app.use("/user", userRouter);
app.use("/test", testRouter);

io.on("connection", (socket) => {
  // Listen for "sendMessage" event
  socket.on("sendMessage", (message) => {
    // Emit the message to all connected clients
    socket.broadcast.emit("receiveMessage", message);
  });

  // Handle disconnection
  socket.on("disconnect", () => {});
});

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
