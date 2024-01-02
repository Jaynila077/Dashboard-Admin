import express from "express";
import storeController from "../../controllers/stores/index.js";
import authenticateToken from "../../middleware/auth.js";

const Store = express.Router();

Store.get("/", authenticateToken, storeController.getStore);
Store.get("/:id", authenticateToken, storeController.getStoreById);
Store.post("/", authenticateToken, storeController.postStore);
Store.put("/:id", authenticateToken, storeController.putStore);
Store.delete("/:id", authenticateToken, storeController.removeStore);

export default Store;