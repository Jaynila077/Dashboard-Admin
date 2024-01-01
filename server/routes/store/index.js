import express from "express";
import storeController from "../../controllers/stores/index.js";
import authenticateToken from "../../middleware/auth.js";

const Store = express.Router();

Store.post("/", authenticateToken, storeController.postStore);

export default Store;