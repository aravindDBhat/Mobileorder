function Input(Props) {
  return (
    <div>
      <input
        type={Props.type}
        placeholder={Props.placeholder}
        required={true}
      />
    </div>
  );
}
export default Input;
