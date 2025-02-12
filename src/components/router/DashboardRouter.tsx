import React from "react";
import { routes } from "@constants";
import { Subscriptions, Overview } from "@pages";
import { Navigate, Route, Routes } from "react-router-dom";

const DashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.subscriptions} />} />
      <Route path={routes.subscriptions} element={<Subscriptions />} />
      <Route path={routes.overview} element={<Overview />} />
    </Routes>
  );
};

export default DashboardRouter;
