import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#3A74B4", "#FBC02D", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  const isEmpty = totalBalance === 0 && totalIncome === 0 && totalExpense === 0;

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-xl">Financial Overview</h5>
      </div>

      {isEmpty ? (
        <p className="text-gray-400 italic text-sm text-center mt-4">
          No financial data available.
        </p>
      ) : (
        <CustomPieChart
          data={balanceData}
          label="Total Balance"
          totalAmount={`₹${totalBalance}`}
          colors={COLORS}
          showTextAnchor
        />
      )}
    </div>
  );
};

export default FinanceOverview;
