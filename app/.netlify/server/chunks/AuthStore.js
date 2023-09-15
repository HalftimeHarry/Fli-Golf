import { w as writable } from "./index.js";
const initialState = {
  formType: "",
  // 'register', 'login', etc.
  isLoggedIn: false
};
const authStore = writable(initialState);
export {
  authStore as a
};
