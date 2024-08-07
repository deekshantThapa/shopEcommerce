import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAntRp_bzkhec2v4mtF_1btr_kxJvq0plM",
    authDomain: "shop-ecommerce-ae635.firebaseapp.com",
    projectId: "shop-ecommerce-ae635",
    storageBucket: "shop-ecommerce-ae635.appspot.com",
    messagingSenderId: "374610870845",
    appId: "1:374610870845:web:2354a595bd6afa74102054"
};

// initialize firebase app
initializeApp(firebaseConfig);

// initialize services
const db = getFirestore();

export { db };