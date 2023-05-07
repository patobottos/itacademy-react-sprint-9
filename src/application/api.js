import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from "./firebase";

// CREATE
export const createUser = async (obj) => {
  const colRef = collection(db, "users");
  const data = await addDoc(colRef, obj);
  return data.id;
};

// UPDATE
export const updateUser = async (id, obj) => {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, obj);
};

// READ
export const getUsers = async () => {
  const colRef = collection(db, "users");
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

// READ WITH WHERE
// Tened en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getUsersByCondition = async (value) => {
  const colRef = collection(db, "users");
  const result = await getDocs(query(colRef, where("age", "==", value)));
  return getArrayFromCollection(result);
};

export const getUserById = async (id) => {
  const docRef = doc(db, "users", id);
  const result = await getDoc(docRef);
  return result.data();
};

// DELETE
export const deleteUser = async (id) => {
  const docRef = doc(db, "users", id);
  await deleteDoc(docRef);
};

export const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};