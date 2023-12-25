import items from "./items";
import Card from "./Card/card";

function Itemsection() {
  return (
    <div>
      {items.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
}
export default Itemsection;
