import initialFriends from "../data/initialFriends";
import Friend from "./Friend";

function FriendList() {
  const friends = initialFriends;
  return (
    <ul className="flex flex-col gap-4">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendList;
