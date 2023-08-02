import { ReactElement } from "react";
import tradingVideo from "/tradingVideo.mp4";
import tradeIcon from "/tradeIcon.svg";
import tradenowTitle from "/tradenowTitle.svg";
import styles from "../styles";

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
        <section className={styles.heroSection}>
          <figure className="w-3/4 lg:w-2/6 flex flex-row items-center gap-4">
            <img src={tradeIcon} className="w-1/4" />
            <img src={tradenowTitle} className="w-full" />
          </figure>
          <Component />
        </section>
      </main>
    );
  };
};

export default FormWrapper;
