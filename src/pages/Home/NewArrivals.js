import { collection, getDocs } from "firebase/firestore";
import { Link, useLoaderData } from "react-router-dom";
import { db } from "../../firebase/firebase";

export default function NewArrivals() {
    const fetchedData = useLoaderData();
    
    console.log(fetchedData);

  return (
    <section className="new-arrivals-section">
        <div className="container">
            <header className="entry-header text-center">
                <h2 className="entry-title">New Arrivals</h2>
            </header>
            <div className="new-arrival-items cloth-items-wrap">
                {fetchedData.map(item => (
                    <div className="item" key={item.id}>
                        <figure className="featured-image">
                            <img src={item.imageUrl} alt="" />
                        </figure>
                        <div className="item-info">
                            <Link to={item.id}><h4>{item.title}</h4></Link>
                            <span className="rating">{item.rating}/5</span>
                            <div className="price-discount-wrap">
                                <span className="discounted-price">${item.discountedPrice}</span>
                                <span className="actual-price">${item.actualPrice}</span>
                                <span className="discount-percent">-{item.discountPercent}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}


// loader function
export const loadNewArrivalsClothes = async () => {
    const colRef = collection(db, 'new-arrivals');
    const snapshot = await getDocs(colRef);

    return snapshot.docs.map(doc => ({
        ...doc.data(), id: doc.id
    }))
}