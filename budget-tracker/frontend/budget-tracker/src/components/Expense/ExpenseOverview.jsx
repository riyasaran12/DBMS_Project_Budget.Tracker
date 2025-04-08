import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomLineChart from "../Charts/CustomLineChart";
import { prepareExpenseLineChartData } from "../../utils/helper";

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
     <div className="card">
      <div className="flex items-center justify-between">
        <div className="">
          <h5 className="text-xl">Expense Overview</h5>
          <p className="text-lg text-gray-400 mt-0.5">
            Track your spending trends over time and gain insights into where your money goes.
          </p>
        </div>
  
        <button className="add-btn !text-lg flex items-center gap-2" onClick={onExpenseIncome}>
          <LuPlus className="text-xl" />
          Add Expense
        </button>
      </div>
  
      <div className="mt-10">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );

  
};

export default ExpenseOverview;
