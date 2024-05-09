"use client";
import s from "./Modal.module.scss";
import { useEffect, useRef, MouseEvent } from "react";
// import Signature from "@assets/signature.svg";

type Props = {
  onClose?: () => void;
  isOpen: boolean;
};

const Modal = ({ onClose, isOpen }: Props) => {
  const windowRef = useRef<HTMLDivElement>(null);

  const handleClickInsideWindow = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className={s.backdrop} onClick={onClose}>
          <div
            ref={windowRef}
            className={s.window}
            onClick={handleClickInsideWindow}
          >
            <h2 className={s.title}>Disclaimer</h2>
            <hr />
            <p className={`${s.firstDescription} ${s.text}`}>
              Content is subject to intellectual property rights and laws,
              namely copyright rights and trademark rights. СSО DESIGN, is the
              owner of the internationally registered trademarks СSО and all
              associated trade names, marks, signs and logos. СSО DESIGN,. is
              further owner of the registered Community design and Design patent
              for elctronic cigiritt pipe their parts and accessories protected
              by industrial
            </p>
            <p className={s.copyright}>
              All copy right reserved by CreativeClout.io
            </p>
            {/* <Signature className={s.icon} /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
