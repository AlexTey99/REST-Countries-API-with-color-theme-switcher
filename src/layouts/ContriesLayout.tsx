import { Outlet } from "react-router-dom";

import {Header} from "../components/Header";

const CountriesLayout = () => (
  <div className="layout">
    <div className="layout_header">
      <Header />
    </div>
    <div className="layout_main-content">
      <Outlet />
    </div>
  </div>
);

export { CountriesLayout };