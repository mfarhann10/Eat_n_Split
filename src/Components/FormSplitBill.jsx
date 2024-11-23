import { useState } from "react";
import Button from "./Button";
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByuser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByuser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByuser) return;

    onSplitBill(whoIsPaying === "user" ? paidByuser : -paidByFriend);
  }
  return (
    <form className="bg-orange-50 form-split-bill" onSubmit={handleSubmit}>
      <h2 className="col-span-2 text-2xl font-bold uppercase tracking-wide text-gray-700 mb-4">
        Split a bill with {selectedFriend.name}
      </h2>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Bill value
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Your expense
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          value={paidByuser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByuser
                : Number(e.target.value)
            )
          }
        />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          {selectedFriend.name}'s expense
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          value={paidByFriend}
          disabled
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="payer"
          className="block text-lg font-medium text-gray-700"
        >
          Who is paying the bill
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white text-gray-700"
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <div className="flex flex-row-reverse pt-5">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
