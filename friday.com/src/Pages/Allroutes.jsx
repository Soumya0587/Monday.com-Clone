import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Plan from "./Plan"
import Login from "./login";
// import PrivateRoute from "./PrivateRoute"

function AllRoutes() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/plan" element={<Plan />} />;
      </Routes>
    </div>
  );
}
export default AllRoutes;
