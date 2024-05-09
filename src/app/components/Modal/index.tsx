"use client";
import s from "./Modal.module.scss";
import { useEffect, useRef } from "react";

type Props = {
  onClose?: () => void;
  isOpen: boolean;
};

const Modal = ({ onClose, isOpen }: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
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
        <div className={s.backdrop}>
          <div className={s.window}>
            <button className={s.button} onClick={onClose}>
              Close
            </button>
            <h2 className={s.title}>Disclaimer</h2>
            <p className={s.firstDescription}>
              THIS SITE AND ALL THE CONTENT MADE AVAILABLE THROUGH THIS SITE ARE
              PROVIDED TO THE USERS “AS IS” WITHOUT ANY EXPRESS WARRANTIES OR
              REPRESENTATIONS OF ANY KIND. СSО DESIGN, DISCLAIMS ALL
              REPRESENTATION, WARRANTIES, TERMS AND CONDITIONS WITH RESPECT TO
              THIS SITE AND ALL THE CONTENT. СSО DESIGN,. MAY NOT WARRANT THAT
              THE CONTENT SHALL BE AT ANY TIME ACCURRATE, COMPLETE AND FREE OF
              ERROR AND THAT THIS SITE WILL BE AT ANY TIME SECURE AND AVAILABLE
              FOR USE. СSО DESIGN, SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING
              OUT OF OR IN CONNECTION WITH THE ACCESS OR USE OF THE SITE BY ITS
              VISITORS.
            </p>
            <p className={s.secondDescription}>
              The Content is subject to intellectual property rights and laws,
              namely copyright rights and trademark rights. СSО DESIGN, is the
              owner of the internationally registered trademarks СSО and all
              associated trade names, marks, signs and logos. СSО DESIGN,. is
              further owner of the registered Community design and Design patent
              for elctronic cigiritt pipe their parts and accessories protected
              by industrial rights regulations. Any use of the Content and
              trademarks including (but not limited to) reproduction,
              dissemination, modification, other form of exploitation,
              distribution and publishing of any parts of the Content without
              prior express approval of СSО DESIGN, is prohibited. The
              trademarks may only be used in conjunction with goods produced by
              СSО DESIGN, and/or in compliance with its’ trademark policy,
              otherwise only with the express prior approval of СSО DESIGN.
              Unauthorized use of the Site, Content, trademarks or other
              intellectual and/or industrial property owned by СSО DESIGN. may
              result in monetary damages and other civil and criminal penalties
              for copyright, trademark and other intelectual rights
              infringement.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
