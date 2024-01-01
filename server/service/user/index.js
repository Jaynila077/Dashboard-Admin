import getUserService from "./userServices/get";
import postUserService from "./userServices/post";
import putUserService from "./userServices/put";
import deleteUserService from "./userServices/delete";
import loginService from "./loginServices/loginServices";

import getStoreService from "../store/storeServices/get";
import postStoreService from "../store/storeServices/post";
import putStoreService from "../store/storeServices/put";
import deleteStoreService from "../store/storeServices/delete";


export { getUserService, postUserService, putUserService, deleteUserService, loginService };
export { getStoreService, postStoreService, putStoreService, deleteStoreService };