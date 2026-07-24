import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PageList from "../pages/PageList";
import PageForm from "../pages/PageForm";
import EditPage from "../pages/EditPage";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Pages */}
        <Route
          path="/pages"
          element={
            <ProtectedRoute>
              <PageList />
            </ProtectedRoute>
          }
        />

        {/* Create Page */}
        <Route
          path="/pages/create"
          element={
            <ProtectedRoute>
              <PageForm />
            </ProtectedRoute>
          }
        />

        {/* Edit Page */}
        <Route
          path="/pages/edit/:pageId"
          element={
            <ProtectedRoute>
              <EditPage />
            </ProtectedRoute>
          }
        />

        {/* Default */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
