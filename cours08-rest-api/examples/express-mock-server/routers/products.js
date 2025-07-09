import {Router} from "express";
import * as controller from "../controllers/products.js";

const router = Router();

// USE GIT TERMINAL ONLY!!

router.route("/api/products")
//curl -s -X GET http://localhost:3050/api/products
  .get(controller.allProducts)
//curl -s -X POST http://localhost:3050/api/products
  .post(controller.addProduct);

router.route("/api/products/:prodId")
  .get(controller.findProduct)
// curl -X PUT http://localhost:3050/api/products/580f95f8-45c9-4fbb-ac91-8c79f5cef19c -H "Content-Type: application/json" -d '{"name":"ProductName","price":9.99,"description":"A cool new product description"}'  
  .put(controller.updateProduct)
  .delete(controller.deleteProduct);

export default router;

// can also use the content-type with a POST request to create a specific new product