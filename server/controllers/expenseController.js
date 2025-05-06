let expenses = [
  {
    id: 1,
    day: "sat",
    amount: 43.28
  },
  {
    id: 2,
    day: "mon",
    amount: 17.45
  },
  {
    id: 3,
    day: "tue",
    amount: 34.91
  },
  {
    id: 4,
    day: "wed",
    amount: 52.36
  },
  {
    id: 5,
    day: "thu",
    amount: 31.07
  },
  {
    id: 6,
    day: "fri",
    amount: 23.39
  },
  {
    id: 7,
    day: "sun",
    amount: 25.48
  },
]


// Get all Expesnses
export const getExpenses = (req, res) => {
  res.json(expenses);
};