function Welcomepage(Props) {
  return (
    <div className={`col-6 toggle-panel ${Props.toggleType}`}>
      <h1>Welcome to</h1>
      <p>
        <i id="icon" className="fa-solid fa-mobile-screen-button fa-2xl"></i>
        <br></br>
        <span>
          <b>OrderMobile</b>
        </span>
      </p>
      <p>Find your perfect mobile companion effortlessly. Happy exploring!</p>
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
