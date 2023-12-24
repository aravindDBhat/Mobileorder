import { React, useState } from "react";
import Signin from "./Sign-In-Up/signin";
import Signup from "./Sign-In-Up/signup";
import Welcomepage from "./Sign-In-Up/welcomepage";

function Authentication() {
  const [toggle, setToggle] = useState(false);

  const manageToggle = async () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="form-container sign-in">
        <Signin />
      </div>
      <div className="form-container sign-up">
        <Signup />
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <Welcomepage toggleType="toggle-left" pageType="SignIn" />
          <Welcomepage toggleType=" toggle-right" pageType="SignUp" />
        </div>
      </div>
    </div>
  );
}
export default Authentication;
