import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";
import { db } from "../../firebase";

export default function Casual() {
    const fetchedData = useLoaderData();


  return (
    <section className="casual-section">
        <div className="container">
            <h2 className="entry-title">Casual</h2>
            <div className="casual-clothes-items">
                {fetchedData.map( item => (
                    <div className="item" key={item.id}>
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}


// loader function
export const CasualClothesLoader = async () => {
    const colRef = collection(db, 'casual');
    const snapshot = await getDocs(colRef);

    return snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
}