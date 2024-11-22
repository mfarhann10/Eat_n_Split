/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-2 text-sm bg-orange-400 text-black font-bold rounded-full shadow-md hover:bg-orange-500 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
