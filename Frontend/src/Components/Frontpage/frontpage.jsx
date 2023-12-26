import Navbars from "./Navbar/navbar";
import ImageGalary from "./ImageGalary/imagegalary";
import Itemsection from "./Itemsection/itemsection";
import { useEffect, useState } from "react";
function Frontpage() {
  const [item, setItem] = useState();
  const [viewpage, setViewpage] = useState();
  const manageItem = (itm) => {
    setItem(itm);
  };
  useEffect(() => {
    setItem();
  }, []);

  return (
    <div>
      <Navbars />
      <ImageGalary />
      <Itemsection function={manageItem} />
    </div>
  );
}
export default Frontpage;
