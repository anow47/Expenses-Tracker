import Charts from '../components/Charts';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [ expense, setExpense ] = useState([]);
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

  return(
    <div className="chart-container bg-VeryPaleOrange rounded-[12px] my-8 p-9">
      <div className="chart border-b-2 border-Cream">
        <h1 className="text-[1.3rem] font-bold pb-9 text-Darkbrown">Spending - Last 7 days</h1>
        <div className="">
          <Charts expense={expense} />
        </div>
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