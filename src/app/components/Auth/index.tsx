import { FormEvent, useState, useEffect } from "react";
import s from "./auth.module.scss";

type Props = {
  onAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Auth = ({ onAuth }: Props) => {
  const [pass, setPass] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (pass === "a2610") {
      onAuth(true);
      localStorage.setItem("isPassEntered", JSON.stringify(true));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isPassEntered")) {
      onAuth(true);
    }
  }, []);

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor="pass">
          Password
        </label>
        <input
          placeholder="Enter your password"
          className={s.field}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          id="pass"
          value={pass}
          name="pass"
          type="password"
        />
      </form>
    </div>
  );
};

export default Auth;
