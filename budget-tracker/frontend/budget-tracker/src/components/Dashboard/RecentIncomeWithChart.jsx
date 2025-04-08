import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

// Multicolor palette instead of just green shades
const COLORS = [
  "#FF6384", // bright pink
  "#36A2EB", // bright blue
  "#FFCE56", // bright yellow
  "#4BC0C0", // bright teal
  "#9966FF", // bright violet
  "#FF9F40", // bright orange
  "#00C49F", // bright turquoise
  "#FF6666", // bright red
  "#33FF57", // bright green
  "#FF33F6", // hot pink
  "#33FFF0", // aqua
  "#FF5733", // bright coral
];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const chartData = data?.map((txn) => ({
    name: txn.source,
    amount: txn.amount,
  }));

  const isEmpty = !chartData || chartData.length === 0;

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-xl">Last 60 Days Income</h5>
      </div>

      {isEmpty ? (
        <p className="text-gray-400 italic text-sm text-center mt-6">
          No income data available for the last 60 days.
        </p>
      ) : (
        <CustomPieChart
          data={chartData}
          label="Income"
          totalAmount={`₹${totalIncome || 0}`}
          colors={COLORS}
          showTextAnchor
        />
      )}
    </div>
  );
};

export default RecentIncomeWithChart;
