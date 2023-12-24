function Welcomepage(Props) {
  return (
    <div className={`col-6 toggle-panel ${Props.toggleType}`}>
      <h1>Hello Friend</h1>
      <p>welcome to the website</p>
      <button
        onClick={Props.toggleFunction}
        className="hidden"
        id={`${Props.pageType}`}
      >
        {Props.pageType}
      </button>
    </div>
  );
}
export default Welcomepage;
