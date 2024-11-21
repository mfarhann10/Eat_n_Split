import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FriendList from "./Components/Friendlist";

function App() {
  return (
    <div className="app grid grid-cols-[34rem_44rem] gap-16 min-h-[66vh] items-start">
      <div className="sidebar rounded-lg shadow-lg p-6 space-y-6">
        <FriendList />
        <FormAddFriend />
        <div className="flex flex-row-reverse">
          <Button>Add Friend</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
