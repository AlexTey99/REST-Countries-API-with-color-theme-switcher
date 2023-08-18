import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {CountriesLayout} from "./layouts/ContriesLayout";
import {CountryDetailContainer} from "./containers/CountryDetailContainer";
import {MainContainer} from "./containers/MainContainer";


const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <CountriesLayout />}>
          <Route index element={<MainContainer />} />
          <Route path="/detailContries/:code" element={<CountryDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
