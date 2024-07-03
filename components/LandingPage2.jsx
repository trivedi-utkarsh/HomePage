import CurvyLine from "./CurvyLine2";
import F1 from "./F1";
import F2 from "./F2";
import F3 from "./F3";
import F4 from "./F4";
import F5 from "./F5";
const LandingPage2 = () => {
  return (
    <div className="h-min-screen text-center mt-8">
      <div className="relative flex items-center justify-center h-4 w-4 ml-16 -top-4">
        <div className="absolute bg-[#1BFFF1] rounded-full w-4 h-4 blur-[9px]"></div>
        <div className="absolute bg-white rounded-full w-2 h-2 blur-[2px]"></div>
      </div>
      <CurvyLine />
      <div className="mt-20">
        <p className="title-case w-1/4 m-auto text-4xl font-medium leading-snug bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent text-center">
          Things user love about X-ACK
        </p>
        <div className="flex flex-col gap-6 pb-32 pt-8">
          <div className="flex justify-center items-center gap-x-6">
            <F1 />
            <F2 />
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <F3 />
            <F4 />
            <F5 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
