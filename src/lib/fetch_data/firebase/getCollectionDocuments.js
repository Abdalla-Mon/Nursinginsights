import { database } from "@/lib/firebase_config/firebase_conig";
import { collection, getDocs } from "firebase/firestore";

export default async function getCollectionDocuments(data, segment) {
  let collectionRef = segment
    ? `${data.collection}/${segment}`
    : data.collection;
  console.log(collectionRef);
  const colRef = collection(database, collectionRef);
  const docs = await getDocs(colRef);
  let docsData = [];

  docs.forEach(async (doc) => {
    let data = doc.data();
    docsData.push(data.info);
  });
  return docsData;
}
// const col = collection(database, "courses", "psychology/lectures");
// const d = await getDocs(col);
// d.forEach((i) => console.log(i.data()));
