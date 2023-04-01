import "./Nav.css";
import DropDown from "./DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCartShopping,
  faFire,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Nav() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="bar">
        <li
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}>
          {<a href="#"> فهرست محصولات </a>}
          <FontAwesomeIcon icon={faCaretDown} />
          <div className={`menu-container ${open ? "inactive" : "active"}`}>
            <ul>
              <DropDown text={<a href="#">آرایش پوست </a>} />
              <DropDown text={<a href="#">آرایش چشم </a>} />
              <DropDown text={<a href="#">آرایش لب </a>} />
              <DropDown text={<a href="#">مراقبت صورت </a>} />
              <DropDown text={<a href="#">مراقبت بدن </a>} />
              <DropDown text={<a href="#">شامپو و ماسک مو </a>} />
            </ul>
          </div>
        </li>
        <li>
          {<a href="#">پرفروش ها </a>}
          <FontAwesomeIcon icon={faFire} />
        </li>
        <li>
          {<a href="#">سبد خرید </a>}
          <FontAwesomeIcon icon={faCartShopping} />
        </li>
        <li>
          {<a href="#"> جستجو </a>}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </li>
      </div>
    </div>
  );
}
export default Nav;
