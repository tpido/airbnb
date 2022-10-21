import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "@/App";
import "assets/less/index.less";
import "antd/dist/antd.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<h1>loading....</h1>}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </Provider>
);
