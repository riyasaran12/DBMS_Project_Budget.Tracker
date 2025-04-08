import React from "react";
import { LuArrowRight } from "react-icons/lu";
import moment from 'moment';
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import { IoMdDocument } from "react-icons/io";

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-xl">Recent Transactions</h5>
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
          transactions.slice(0, 5).map((item) => (
            <TransactionInfoCard
              key={item._id}
              title={item.type === "expense" ? item.category : item.source}
              icon={item.icon}
              date={moment(item.date).format("Do MMM YYYY")}
              amount={item.amount}
              type={item.type}
              hideDeleteBtn
            />
          ))
        ) : (
          <p className="text-gray-400 italic text-sm text-center">
            No recent transactions found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
