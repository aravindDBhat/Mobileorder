import items from "./items";
import Card from "./Card/card";

function Itemsection(Props) {
  return (
    <div>
      {items.map((item) => {
        return <Card id={item.id} function={Props.function} item={item} />;
      })}
    </div>
  );
}
export default Itemsection;
