import "./Nav.css";
function DropDown(props) {
  return (
    <li className="dropdownItem">
      <a> {props.text} </a>
    </li>
  );
}
export default DropDown;
