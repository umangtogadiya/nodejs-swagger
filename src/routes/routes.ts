import express from "express";
import { userListing } from "../controllers/user.controller";
const routes = express.Router();

routes.get("/user-list", userListing);

export default routes;
