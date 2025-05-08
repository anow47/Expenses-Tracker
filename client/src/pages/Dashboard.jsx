import Charts from '../components/Charts';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [ expense, setExpense ] = useState([]);
  const [ amount, setAmount ] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await fetch(`${apiUrl}/api/expenses`);
  
        if (!res.ok) {
          throw new Error('Faild to fetch:');
        }
  
        const data = await res.json();
        setExpense(data)

      } catch (err) {
        console.error('Error fetching data : ', err);
      }
    }
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Get the total expsense amount
  const totalAmount = expense.reduce((acc, e) => acc + e.amount, 0).toFixed(2);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/amount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Number(amount) }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  
  return(
    <div className="chart-container bg-VeryPaleOrange rounded-[12px] my-8 p-9">
      <div className="chart border-b-2 border-Cream mb-9">
        <div className="flex justify-between items-center">
          <h1 className="text-[1.3rem] font-bold text-Darkbrown">Spending - Last 7 days</h1>
          <form action="" className="flex gap-4" onSubmit={submitForm}>
            <input
              id="amount"
              name="amount"
              type="number"
              required
              value={amount}
              placeholder="$0"
              className="bg-Cream font-bold px-2 py-1 rounded-[5px] w-20"
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="submit"
              value="Add"
              className="bg-SoftRed font-bold text-[#fff] rounded-[5px] py-1 px-10 cursor-pointer"
            />
          </form>
        </div>
        <Charts expense={expense} />
      </div>
      <div className="chart-bottom pt-[1rem]">
        <p className='text-MediumBrown text-[0.9rem]'>Total this month</p>
        <div className="total-container flex justify-between items-center">
          <span className="text-[1.7rem] font-bold text-Darkbrown">${totalAmount}</span>
          <div className="info">
            <span className="font-bold text-Darkbrown">+2.4%</span>
            <p className="text-MediumBrown text-[0.9rem]">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;