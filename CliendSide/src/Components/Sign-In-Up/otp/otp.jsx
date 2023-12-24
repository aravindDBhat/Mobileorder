import Input from "../InputField/input";
import Button from "../Button/button";
function OTP(Props) {
  return (
    <form className="col-6">
      <h1>Enter the OTP</h1>
      <Input type="text" placeholder="OTP" />
      <a href="/">Send OTP</a>
      <div className="d-flex">
        <Button function={Props.stepFunction} text="Previous" />
        <Button function={Props.stepFunction} text="Submit" />
      </div>
    </form>
  );
}
export default OTP;
