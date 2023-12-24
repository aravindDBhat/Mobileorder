import Input from "../InputField/input";
import Button from "../Button/button";
function Password(Props) {
  return (
    <form className="col-6">
      <h2>Enter the Password</h2>
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder=" Confirm password" />
      <div className="d-flex">
        <Button function={Props.stepFunction} text="Previous" />
        <Button function={Props.stepFunction} text="Submit" />
      </div>
    </form>
  );
}
export default Password;
