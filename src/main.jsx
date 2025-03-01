import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
    <div className="transform bg-white bg-[radial-gradient(80%_120%_at_70%_70%,hsla(0,0%,85%,0)_0,#dff9f3_30%,#ecf7f4_50%)]">
    <App />
      </div>
      
    </Provider>
  </BrowserRouter>
);
