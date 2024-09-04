import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@assets/yadin.png";
import s from "./preload.module.scss";
import { Oval } from "react-loader-spinner";

type Props = {
  setShowMainContent: React.Dispatch<React.SetStateAction<boolean>>;
};

const Preload = ({ setShowMainContent }: Props) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowMainContent(true);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setShowMainContent]);

  const handleTransitionEnd = () => {
    if (fadeOut) {
      setShowMainContent(true);
    }
  };

  return (
    <div
      className={`${s.preloadWrapper} ${fadeOut ? s.fadeOut : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={s.loading}>
        {/* <Oval
          visible={true}
          height="280"
          width="280"
          strokeWidth={3}
          color="rgba(255, 255, 255, 0.5)"
          secondaryColor="#08139e"
          ariaLabel="oval-loading"
          wrapperClass={s.anim}
        /> */}
        <Image src={logo} width={340} height={340} alt="logo" />
      </div>
    </div>
  );
};

export default Preload;
