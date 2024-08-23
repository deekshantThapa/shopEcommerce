import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><NavLink>Shop</NavLink></li>
            <li><NavLink>On Sale</NavLink></li>
            <li><NavLink>New Arrivals</NavLink></li>
            <li><NavLink>Brands</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
    </nav>
  )
}
