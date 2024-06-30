import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { FilterProvider } from "./context/FilterInfoContext";
import { FilterCategoryProvider } from "./context/FilterCategoryContext";
import { SortProvider } from "./context/SortContext";
import { FilterBrandProvider } from "./context/FilterBrandContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <FilterCategoryProvider>
        <SortProvider>
          <FilterBrandProvider>
            <RecoilRoot>
              <App />
            </RecoilRoot>
          </FilterBrandProvider>
        </SortProvider>
      </FilterCategoryProvider>
    </FilterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
