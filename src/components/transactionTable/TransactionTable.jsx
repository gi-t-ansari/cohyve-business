import React, { useState } from "react";
import dummyCurrency from "../../assets/images/dummy-currency.png";

const TransactionTable = () => {
  const [transactionData, setTransactionData] = useState([]);
  return (
    <table className="w-full mt-4 relative">
      <thead className="border-y border-[#1b1b1b] px-0">
        <tr>
          <th className=" p-3 font-thin text-lg opacity-50" align="left">
            Date
          </th>
          <th className=" p-3 font-thin text-lg opacity-50" align="left">
            Type
          </th>
          <th className=" p-3 font-thin text-lg opacity-50" align="left">
            Bill No.
          </th>
          <th className=" p-3 font-thin text-lg opacity-50" align="left">
            Description
          </th>
          <th className=" p-3 font-thin text-lg opacity-50" align="left">
            Amount
          </th>
          <th className=" p-3 font-thin text-lg opacity-50" align="left">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="relative">
        {transactionData && transactionData?.length > 0 ? (
          <></>
        ) : (
          <tr className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[-50%]">
            <td colSpan={12} align="center">
              <img width={197} src={dummyCurrency} alt="dummy-currency" />
              <h5 className="text-[20px] mt-4">
                Keep track of all your expenses
              </h5>
              <p className="text-[15px] font-thin opacity-50">
                You currently don’t have any transactions. Once you start
                projects, your transactions will appear here.
              </p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TransactionTable;
