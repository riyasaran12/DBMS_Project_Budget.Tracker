import React, { useState, useEffect } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);
  }, [data]);

  const isEmpty = chartData.length === 0;

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl">Last 30 Days Expenses</h5>
      </div>

      {isEmpty ? (
        <p className="text-gray-400 italic text-sm text-center">
          No expenses data available for the last 30 days.
        </p>
      ) : (
        <CustomBarChart data={chartData} />
      )}
    </div>
  );
};

export default Last30DaysExpenses;
