import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
}, {timestamps: true});

export default mongoose.model("Expenses", expenseSchema);