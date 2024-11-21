/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="px-4 py-2 text-sm bg-orange-400 text-black font-bold rounded-full shadow-md hover:bg-orange-500 transition">
      {children}
    </button>
  );
}

export default Button;
