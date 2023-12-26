function Card(Props) {
  return (
    <div
      id={Props.id}
      onClick={() => Props.function(Props.item)}
      class="card mb-3 cardbody row g-0 text-start"
    >
      <div class="col-md-3 text-center bg-white img">
        <img
          src={Props.item.img}
          class="img-fluid rounded-start"
          height="70%"
        />
      </div>
      <div class="col-md-8 ">
        <div class="card-body ms-3">
          <div className="row d-flex">
            <div className="col-6">
              <h2 class="card-title">{Props.item.Brand}</h2>
            </div>
            <div className="col-6 text-end">
              <h2 class="card-title ">
                <i class="fa-solid fa-indian-rupee-sign"> </i>{" "}
                {Props.item.price}
              </h2>
            </div>
          </div>

          <div className="d-flex">
            <div className="mt-4 me-5">
              {" "}
              <p class="card-text">
                <b>RAM : </b>
                {Props.item.RAM}
              </p>
              <p class="card-text">
                <b>Primary_camera : </b>
                {Props.item.Primary_camera}
              </p>
            </div>
            <div className="mt-4 ms-5">
              <p class="card-text">
                <b>Secondary_camera : </b>
                {Props.item.Secondary_camera}
              </p>
              <p class="card-text">
                <b>Operating_System : </b> {Props.item.Operating_System}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
