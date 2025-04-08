import moment from "moment";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-xl">Expenses</h5>
        <button
          className="card-btn flex items-center gap-1 group"
          onClick={onSeeMore}
        >
          <span className="text-sm text-gray-700 group-hover:text-primary transition-colors duration-200">
            See All
          </span>
          <LuArrowRight className="text-base group-hover:text-primary transition-colors duration-200" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.length > 0 ? (
          transactions.slice(0, 5).map((expense) => (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category}
              icon={expense.icon}
              date={moment(expense.date).format("Do MMM YYYY")}
              amount={expense.amount}
              type="expense"
              hideDeleteBtn
            />
          ))
        ) : (
          <p className="text-gray-400 italic text-sm text-center">
            No expense transactions found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpenseTransactions;
