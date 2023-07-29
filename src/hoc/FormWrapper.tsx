import { ReactElement } from "react";
import tradingVideo from "/tradingVideo.mp4";

const FormWrapper = (Component: () => ReactElement): (() => ReactElement) => {
  return function () {
    return (
      <main className="w-full h-screen">
        <div className="absolute h-full w-full top-0 left-0 bg-[#00000080]"></div>
        <video
          src={tradingVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
        <Component />
      </main>
    );
  };
};

export default FormWrapper;
