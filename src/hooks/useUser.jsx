import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export function useUser() {
  const [data, setData] = useState({});
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    async function getData() {
      const q = query(
        collection(db, "users"),
        where("email", "==", currentUser.email)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setData(doc.data());
      });
    }
    if (currentUser) getData();
  }, []);

  return { data };
}
