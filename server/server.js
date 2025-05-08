import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { getExpenses } from "./controllers/expenseController.js";
import Expenses from "./models/Expenses.js";

dotenv.config();
const app = express();

//MiddeleWares
app.use(cors());
app.use(express.json());

// POST route to receive numbers
app.post("/api/amount", async (req, res) => {
  const { amount } = req.body;

  try {
    const newAmount = new Expenses({ amount });
    await newAmount.save();
    res.status(201).json({ message: "Amount saved successfully", data: newAmount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//Get all Expenses
app.get('/api/expenses', getExpenses);

// Connect DB and start server
const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})
.catch(error => console.log(error));