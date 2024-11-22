import Friend from "./Friend";
/* eslint-disable react/prop-types */
function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul className="flex flex-col gap-4">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendList;
