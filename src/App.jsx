import FriendList from "./Components/Friendlist";

/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="app grid grid-cols-[34rem_44rem] gap-16 min-h-[66vh] items-start">
      <div className="sidebar bg-orange-50 rounded-lg shadow-lg p-6">
        <FriendList />
      </div>
    </div>
  );
}

export default App;
