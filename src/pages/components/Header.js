import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="hgroup-wrap">
          <div className="site-logo">
            <Link to='/'>Shop.co</Link>
          </div>
          <Navigation/>
          <SearchBar/>
        </div>
      </div>
    </header>
  )
}
