import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// ✅ Move tooltip outside
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xl font-semibold text-blue-700 mb-1">
          {payload[0].payload.category}
        </p>
        <p className="text-sm text-gray-600">
          Amount: <span className="text-sm font-medium text-gray-900">₹{payload[0].payload.amount}</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#3B82F6" : "#93C5FD";
  };

  return (
    <div className="bg-white mt-6">
      {data && data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid stroke="none" />
            <XAxis dataKey="month" tick={{ fontSize: 16, fill: "#555" }} stroke="none" />
            <YAxis tick={{ fontSize: 16, fill: "#555" }} stroke="none" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={getBarColor(index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-[300px] flex items-center justify-center text-gray-400 text-sm italic">
          No data available for the last 30 days.
        </div>
      )}
    </div>
  );
};

export default CustomBarChart;
