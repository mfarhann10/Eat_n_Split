import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import FriendList from "./Components/Friendlist";
import initialFriends from "./data/initialFriends";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAdd() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  return (
    <div className="app grid grid-cols-[34rem_44rem] gap-16 min-h-[66vh] items-start mt-5">
      <div className="sidebar rounded-lg shadow-lg p-6 space-y-6">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        {
          <div className="flex flex-row-reverse">
            <Button onClick={handleShowAdd}>
              {showAddFriend ? "Close" : "Add Friend"}
            </Button>
          </div>
        }
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
