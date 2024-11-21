import Button from "./Button";

function FormAddFriend() {
  return (
    <form className=" bg-orange-50 form-add-friend">
      {/* Input Friend Name */}
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Friend Name
        </label>
        <input
          type="text"
          placeholder="Enter friend's name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      {/* Input Image URL */}
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          placeholder="Enter image URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />
      </div>

      {/* Button */}
      <div className="flex flex-row-reverse pt-5">
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
