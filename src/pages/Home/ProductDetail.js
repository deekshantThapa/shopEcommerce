import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function ProductDetail(){
    const singleProductData = useLoaderData();
    // console.log(singleProductData);

    const {addToCart} = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(singleProductData);
        // console.log('added');
    }

    return(
        <section className="single-product-detail">
            <div className="container">
                <div className="single-product-detail-wrap">
                    <figure className="featured-image">
                        <img src={singleProductData.imageUrl} alt="" />
                    </figure>
                    <div className="product-detail-content">
                        <h3>{singleProductData.title}</h3>
                        <span className="rating">Rating: {singleProductData.rating}/5</span>
                        <div className="price-discount-wrap">
                            <span className="discounted-price price">${singleProductData.discountedPrice}</span>
                            <span className="actual-price price">${singleProductData.actualPrice}</span>
                            <span className="discount-percent">-{singleProductData.discountPercent}%</span>
                        </div>
                        <p>{singleProductData.description}</p>
                        <button onClick={handleAddToCart} className="btn-primary add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

// loader function
export const loadProductDetail = async ({params}) => {
    const {id} = params;
    
    const docRef = doc(db, 'new-arrivals', id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
}