function Button(Props) {
  return (
    <div className="me-2">
      <button onClick={Props.stepFunction}>{Props.text}</button>
    </div>
  );
}
export default Button;
