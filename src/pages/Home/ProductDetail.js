import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useLoaderData } from "react-router-dom";

export default function ProductDetail(){
    const singleProductData = useLoaderData();

    console.log(singleProductData);

    return(
        <section className="single-product-detail">
            <div className="container">
                <p>{singleProductData.title}</p>
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