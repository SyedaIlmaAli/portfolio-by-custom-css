import Link from "next/link";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="logo">IA.</h1>
      </div>
      <div className="header-right-div">
        <ul className="header-links">
            <li>
                <Link className="nav-links" href={"/"}>Home</Link>
            </li>
            <li>
                <Link className="nav-links" href={"/about"}>About</Link>
            </li>
            <li>
                <Link className="nav-links" href={"/contact"}>Contact</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
