import { firebaseConfig } from "./firebase-config.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.agregarProducto = async function () {

  await addDoc(collection(db, "productos"), {
    nombre: nombre.value,
    descripcion: descripcion.value,
    imagen: imagen.value
  });

  alert("Producto agregado");

  nombre.value = "";
  descripcion.value = "";
  imagen.value = "";

  cargarProductos();
}

window.cargarProductos = async function () {

  const snap = await getDocs(collection(db, "productos"));

  listado.innerHTML = "";

  snap.forEach(doc => {

    const p = doc.data();

    listado.innerHTML += `
      <div style="border:1px solid #ccc;padding:10px;margin:10px;">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <img src="${p.imagen}" width="120">
      </div>
    `;
  });
}
