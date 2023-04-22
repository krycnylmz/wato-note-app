import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    let storedUser = sessionStorage.getItem('user');
    return storedUser ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;