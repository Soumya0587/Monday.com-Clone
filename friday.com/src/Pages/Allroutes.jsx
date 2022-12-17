import { Routes, Route } from "react-router-dom";
import Home from "./Home";

import Login from "./login";
// import PrivateRoute from "./PrivateRoute"

function AllRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home />} />;
        <Route path="/login" element={<Login />} />;
      </Routes>
    </div>
  );
}
export default AllRoutes;
