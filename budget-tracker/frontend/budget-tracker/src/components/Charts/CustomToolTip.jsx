import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-3 border border-gray-300">
        <p
          className="text-blue-700 mb-2"
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          {label}
        </p>
        <p
          className="text-gray-700"
          style={{ fontSize: '16px' }}
        >
          Amount:{" "}
          <span
            className="text-gray-900"
            style={{ fontSize: '18px', fontWeight: 'bold' }}
          >
            ₹{payload[0].value}
          </span>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
