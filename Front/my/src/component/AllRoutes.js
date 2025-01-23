import { Home } from "../page/home";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../page/login";
import { Admin } from "../page/admin";
import { Delear } from "../page/Delear";
import { DealerProduct } from "./DealerProduct";
import { AddProduct } from "../addProduct";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<AuthPage />} />
            
            {/* Admin Nested Routes */}
            {/* The URL /admin/users/settings is not working because the nested routes are configured incorrectly */}
            {/* The current setup only allows for /admin/users OR /admin/settings, not both together */}
            {/* To fix this, you would need to further nest the routes or adjust the URL structure */}
            <Route path="/admin/*" element={<Admin />}>
                <Route path="users" element={<div>Users List</div>} />
                <Route path="settings" element={<div>Settings Page</div>} />
            </Route>

            {/* Dealer Nested Routes */}
            <Route path="/dealer/*" element={<Delear />}>
    <Route path="inventory" element={<DealerProduct />} />
   
    <Route path="add-product" element={<AddProduct />} />
</Route>
        </Routes>
    );
};
