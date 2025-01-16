import React from "react";
import { routes } from "@constants";
import { Countries, Overview } from "@pages";
import { Navigate, Route, Routes } from "react-router-dom";

const DashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.countries} />} />
      <Route path={routes.countries} element={<Countries />} />
      <Route path={routes.overview} element={<Overview />} />
    </Routes>
  );
};

export default DashboardRouter;
