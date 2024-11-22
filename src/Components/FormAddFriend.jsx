import { useState } from "react";
import Button from "./Button";
/* eslint-disable react/prop-types */
function FormAddFriend({ onAddFriend, closeAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id: id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
    closeAddFriend;
  }
  return (
    <form className=" bg-orange-50 form-add-friend" onSubmit={handleSubmit}>
      {/* Input Friend Name */}
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          Friend Name
        </label>
        <input
          type="text"
          placeholder="Enter friend's name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
