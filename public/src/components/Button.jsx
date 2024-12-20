export const Button = ({ label, onClick, style, isLoading }) => {
  return (
    <button 
        onClick={onClick}
        style={style}
        className="bg-sky-500 hover:bg-sky-700 text-white  semibold py-2 px-4 rounded-full active:bg-sky-600 focus:bg-sky-300 ">
      {isLoading ? 'Chargement...' : label}
    </button>
  );
};
