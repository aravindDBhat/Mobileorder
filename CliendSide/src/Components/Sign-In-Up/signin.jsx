import Input from "./InputField/input";
import Button from "./Button/button";
import SocialIcons from "./SocialIcon/socialicon";
function Signin(Props) {
  return (
    <form className="col-6">
      <h2>Sign In</h2>
      <SocialIcons />
      <span>or use your email for login</span>
      <Input type="email" placeholder="Ex. abc@gmail.com" />
      <Input type="password" placeholder="8-digits" />
      <a href="/">Forget password?</a>
      <Button function="/" text="Sign In" />
    </form>
  );
}
export default Signin;
