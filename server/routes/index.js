import root from "./root/index";
import user from "./user/index";
import store from "./store/index";

const routes = (app) => {
  app.use("/", root);
  app.use("/user", user);
  app.use("/store", store);
};

export default routes;


