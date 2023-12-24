import { React, useState } from "react";
import Signin from "./Sign-In-Up/signin";
import Signup from "./Sign-In-Up/signup";
import Welcomepage from "./Sign-In-Up/welcomepage";
import OTP from "./Sign-In-Up/otp/otp";
import Password from "./Sign-In-Up/password/password";
function Authentication() {
  const [toggle, setToggle] = useState(true);
  const [step, setStep] = useState(0);
  const manageToggle = async () => {
    setToggle(!toggle);
  };
  const manageStep = async () => {
    setStep((step + 1) % 3);
  };
  console.log("step ", step);
  return (
    <div>
      {!toggle ? (
        <div className="container">
          <div className="row">
            <Signin />
            <Welcomepage
              toggleFunction={manageToggle}
              toggleType=" toggle-right"
              pageType="Sign Up"
            />
          </div>
        </div>
      ) : (
        <div>
          {step < 1 ? (
            <div className="container">
              <div className="row">
                <Signup stepFunction={manageStep} />
                <Welcomepage
                  toggleFunction={manageToggle}
                  toggleType=" toggle-right"
                  pageType="Sign In"
                />
              </div>
            </div>
          ) : (
            <div>
              {step === 1 ? (
                <div className="container">
                  <div className="row">
                    <OTP stepFunction={manageStep} />
                    <Welcomepage
                      toggleFunction={manageToggle}
                      toggleType=" toggle-right"
                      pageType="Sign In"
                    />
                  </div>
                </div>
              ) : (
                <div className="container">
                  <div className="row">
                    <Password stepFunction={manageStep} />
                    <Welcomepage
                      toggleFunction={manageToggle}
                      toggleType=" toggle-right"
                      pageType="Sign In"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Authentication;
