"use client";
import s from "./Modal.module.scss";
import { useEffect, useRef, MouseEvent } from "react";

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
      <div
        className={`${s.backdrop} ${isOpen && s.backdropActive}`}
        onClick={onClose}
      >
        <div
          ref={windowRef}
          className={`${s.window} ${isOpen && s.windowActive}`}
          onClick={handleClickInsideWindow}
        >
          <h2 className={s.title}>Disclaimer</h2>
          <hr />
          <p className={`${s.firstDescription} ${s.text}`}>
            This website and all content available through this website are
            provided to users &quot;as is&quot; without any express warranties
            or representations of any kind. creative clout, disclaims all
            representations, warranties, terms and conditions relating to this
            website and all content. creative clout design.
          </p>
          <p className={`${s.secondDescription} ${s.text}`}>
            Creative clout. shall not be liable for any damages arising out of
            or related to the access or use of the Website by its visitors. Any
            use of the content and trademarks including (but not limited to)
            reproduction, publication and any other form of exploitation of
            parts of the content designed by the Website without express consent
            is prohibited. Previews from creative clout design, s.r.o.
            Unauthorized use of the Website, Content, trademarks, or other
            intellectual and/or industrial property owned by Creative Clout, It
            may result in monetary damages and other civil and criminal
            penalties for infringement of copyrights, trademarks, and other
            intellectual property rights.
          </p>
          <p className={s.copyright}>
            All copy right reserved by CreativeClout.io
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
