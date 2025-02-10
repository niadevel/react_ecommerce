import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc } from "firebase/firestore";
import products from "./data"

const firebaseConfig = {
  apiKey: "AIzaSyDHOx5uVvNFC7cY0QaUhpnz65Xd0K6HVws",
  authDomain: "nia-joyas.firebaseapp.com",
  projectId: "nia-joyas",
  storageBucket: "nia-joyas.firebasestorage.app",
  messagingSenderId: "974652505804",
  appId: "1:974652505804:web:88ae2ab5cfd58414b54c69"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export default async function getAsyncData() {
    const collectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(collectionRef)
    const documentsData = productsSnapshot.docs.map ( doc => {
        return { ...doc.data(), id: doc.id}
    }
)
return documentsData;
}

export async function getAsyncItemById(itemID) {
    const docRef = doc(db, "products", itemID )
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return docData;
}

export async function getAsyncItemsByCategory(catID) {
    const productsColRef = collection (db, "products");
    const q = query (productsColRef, where("category", "==", catID))

    const productsSnapshot = await getDocs(q)
    const documentsData = productsSnapshot.docs.map( doc => {
        return { ...doc.data(), id: doc.id}
        }
    )
    return documentsData;
}

export async function createDocument() {
    const newProductRef = doc(db, "products", "nuevo-id")
    await setDoc(newProductRef, {
        title: "Silver Charm Bracelet",
        price: 45.999,
        description: "A delicate silver bracelet with beautiful charm details.",
        category: "bracelet",
        imgUrl: "https://joyasmarisol.com/11041-product_zoom/pulsera-plata-ala-con-infinito.jpg",
        stock: 10
    })
     
    console.log("Nuevo documento creado")

    // const docRef = await addDoc(collection(db, "products"), {
    //     title: "Silver Charm Bracelet",
    //     price: 45.999,
    //     description: "A delicate silver bracelet with beautiful charm details.",
    //     category: "bracelet",
    //     imgUrl: "https://joyasmarisol.com/11041-product_zoom/pulsera-plata-ala-con-infinito.jpg",
    //     stock: 10
    // },);
    // console.log("Document written with ID: ", docRef.id);
}

async function exportProductsToDb() {
    for(let item of products) {
         delete item.id;
       const docID = await addDoc (collection(db, "products"), item)
       console.log("Creado documento", docID.id)
    }
}

export async function createBuyOrder(orderData) {
    const newOrderDoc = await addDoc(collection(db, "orders"), orderData);

    return newOrderDoc.id
}



export async function updateStock() {
    
}