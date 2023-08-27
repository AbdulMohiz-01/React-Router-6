import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../apis/axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


const RequireAuth = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();


  
//   useEffect(() => {
//     console.log(currentlyLoggedRole)
//     async function fetchRoles(){
//       const { data } = await axios.get('/api/roles');
//       console.log(data);
//       setRoles(data);
//     }
//     fetchRoles();
//   }, []);

    return (
        allowedRoles?.includes(user.role)
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

// props validation
RequireAuth.propTypes = {
  allowedRoles: PropTypes.array
};

export default RequireAuth;