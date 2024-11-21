import FriendList from "./Components/Friendlist";

/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="app grid grid-cols-[40rem_1fr] gap-20 min-h-[70vh] items-start">
      <div className="sidebar bg-orange-50 rounded-xl shadow-lg p-8">
        <FriendList />
      </div>
    </div>
  );
}

export default App;
