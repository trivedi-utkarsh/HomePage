const Line = ({ className }) => {
  return (
    <div className={className}>
      <div
        className="absolute w-1 bottom-0 h-1/3 rounded-full mb-80"
        style={{
          background:
            "linear-gradient(180deg, #D2A8FF 0%, #A371F7 1%, #4C2E8E 65%, #6639BA 93.23%, rgba(102, 57, 186,1.00) 100%)",
        }}
      ></div>
      <div className="relative flex items-center justify-center h-4 w-4 top-[445px] -left-1">
        <div className="absolute bg-[#DD7DF7] rounded-full w-4 h-4 blur-[9px]"></div>
        <div className="absolute bg-white rounded-full w-2 h-2 blur-[2px]"></div>
      </div>
      <div className="absolute w-1 bottom-0 h-1/3 bg-gradient-to-b from-purple-800 to-purple-200/30 rounded-full"></div>
    </div>
  );
};
export default Line;
