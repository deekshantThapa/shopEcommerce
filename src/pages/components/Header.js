import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import LoginAndCart from "./LoginAndCart";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="hgroup-wrap">
          <div className="site-logo">
            <Link to='/'>Shop.co</Link>
          </div>
          <Navigation/>
          <SearchBar/>
          <LoginAndCart/>
        </div>
      </div>
    </header>
  )
}
