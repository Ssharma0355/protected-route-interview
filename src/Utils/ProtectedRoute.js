import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({Component}) => {
    const navigate = useNavigate();

      let isloggined = localStorage.getItem("login");
      return isloggined ? Component : <Navigate to="/login" />;

}