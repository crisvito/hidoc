import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export function useUser() {
  const [data, setData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      if (currentUser) {
        const q = query(
          collection(db, "users"),
          where("uid", "==", currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setData(doc.data());
        });
      }
    };
    getData();
  }, []);

  return { data };
}
