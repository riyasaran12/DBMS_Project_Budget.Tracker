import React from 'react'
import { LuDownload } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
    return (
      <div className="card">
        <div className="flex items-center justify-between">
          <h5 className="text-xl">All Expenses</h5>
          <button className="card-btn !text-lg flex items-center gap-2" onClick={onDownload}>
            <LuDownload className="text-lg" /> Download
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {transactions?.map((expense) => (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category}
              icon={expense.icon}
              date={moment(expense.date).format("Do MMM YYYY")} // updated here
              amount={expense.amount}
              type="expense"
              onDelete={() => onDelete(expense._id)}
            />
          ))}
        </div>
      </div>
    );
};

export default ExpenseList;
