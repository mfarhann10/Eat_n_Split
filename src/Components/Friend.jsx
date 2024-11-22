import Button from "./Button";

/* eslint-disable react/prop-types */
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  const selected =
    "flex items-center gap-4 bg-orange-100 shadow-md rounded-lg p-4 ";
  const notSelected =
    "flex items-center gap-4 bg-white shadow-md rounded-lg p-4";
  return (
    <li className={isSelected ? selected : notSelected}>
      <img
        src={friend.image}
        alt={friend.name}
        className="w-12 h-12 rounded-full object-cover"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="text-red-500">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance > 0 && (
          <p className="text-green-500">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance === 0 && (
          <p className="text-gray-500">You and {friend.name} are even</p>
        )}
      </div>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
