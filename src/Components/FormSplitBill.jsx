import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="bg-orange-50 form-split-bill">
      <h2 className="col-span-2 text-2xl font-bold uppercase tracking-wide text-gray-700 mb-4">
        Split a bill with X
      </h2>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Bill value
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Your expense
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          X's expense
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white text-gray-700">
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>
      </div>

      <div className="flex flex-row-reverse pt-5">
        <Button>Split Bill</Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
