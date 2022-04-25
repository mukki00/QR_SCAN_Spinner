import { createStore } from "vuex";
import spinner from "./modules/spinner";

const store = createStore({
  modules: { spinner },
});
export default store;
