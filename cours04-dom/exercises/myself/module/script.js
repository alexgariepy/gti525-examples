import { Product } from "./product.js";

const p1 = new Product("Apple", 2.00, 5)
const p2 = new Product("Orange", 3.00, 2)
const p3 = new Product("Mango", 5.00, 4)

const products = [p1,p2,p3]

const productsDiv = document.getElementById("liste-produits");
products.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.nom}: $${p.prix} (Qty: ${p.quantite})`;
    productsDiv.appendChild(div);
});