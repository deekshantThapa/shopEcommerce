import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link>Shop</Link></li>
            <li><Link>On Sale</Link></li>
            <li><Link>New Arrivals</Link></li>
            <li><Link>Brands</Link></li>
        </ul>
    </nav>
  )
}
