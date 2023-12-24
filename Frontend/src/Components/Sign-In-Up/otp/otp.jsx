import Input from "../InputField/input";
import Button from "../Button/button";
function OTP(Props) {
  return (
    <form className="col-6">
      <h2>Enter the OTP</h2>
      <Input type="text" placeholder="OTP" />
      <a href="/">Send OTP</a>
      <div className="d-flex">
        <Button stepFunction={Props.stepFunction} text="Previous" />
        <Button stepFunction={Props.stepFunction} text="Next" />
      </div>
    </form>
  );
}
export default OTP;
