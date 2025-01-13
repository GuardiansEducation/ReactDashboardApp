
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Countries, Overview } from "@pages";

const DashboardRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" />}/>
        <Route path="/countries" element={<Countries />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DashboardRouter;
