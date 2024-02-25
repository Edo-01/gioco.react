const Header = ({ avviaGame, inCorso, restart, score, abbandona }) => {
  return (
    <header className="bg-gray-900 min-h-[85px] flex justify-between items-center p-4">
      {inCorso ? (
        <>
          <button
            onClick={restart}
            className=" bg-purple-500 text-purple-100 py-2 px-8 rounded-3xl shadow-2xl"
          >
            Restart
          </button>
          <button
            onClick={abbandona}
            className=" bg-purple-500 text-purple-100 py-2 px-8 rounded-3xl shadow-2xl"
          >
            Abbandona
          </button>
          <div className="shadow-2xl w-[75px] h-[75px] bg-gray-700 text-gray-200 flex flex-col justify-center items-center p-3 rounded-full">
            <h2 className="font-semibold text-[19px]">{score}</h2>
            <span className="text-[12px] mt-[-2px]">Score</span>
          </div>
        </>
      ) : (
        <>
          <div className="text-white">LoGO</div>
          <button
            onClick={avviaGame}
            className="bg-purple-500 text-purple-100 py-2 px-8 rounded-3xl shadow-2xl"
          >
            Start
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
