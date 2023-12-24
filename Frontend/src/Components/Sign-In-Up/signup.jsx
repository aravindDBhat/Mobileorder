import Input from "./InputField/input";
import Button from "./Button/button";
import SocialIcons from "./SocialIcon/socialicon";
function Signup(props) {
  return (
    <form className="col-6">
      <h2>Sign Up</h2>
      <SocialIcons />
      <span>or use your email for Signup</span>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Ex. abc@gmail.com" />
      <Button stepFunction={props.stepFunction} text="Sign Up" />
    </form>
  );
}
export default Signup;
