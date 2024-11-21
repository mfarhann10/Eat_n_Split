/* eslint-disable react/prop-types */
function Friend({ friend }) {
  return (
    <li className="flex items-center gap-6 bg-white shadow-lg rounded-xl p-6 hover:bg-orange-100 transition duration-200">
      <img
        src={friend.image}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold">{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="text-red-500 text-lg">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-500 text-lg">
            {friend.name} owes you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && (
          <p className="text-gray-500 text-lg">
            You and {friend.name} are even
          </p>
        )}
      </div>
      <button className="px-6 py-3 text-base bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition">
        Select
      </button>
    </li>
  );
}

export default Friend;
