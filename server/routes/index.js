import root from "./root/index";
import user from "./user/index";
import store from "./store/index";
import billboard from "./billboard/index";

const routes = (app) => {
  app.use("/", root);
  app.use("/user", user);
  app.use("/store", store);
  app.use("/billboard", billboard);
};

export default routes;


