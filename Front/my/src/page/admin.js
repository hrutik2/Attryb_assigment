import { Outlet, Link } from "react-router-dom";

export const Admin = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <Link to="users">Users</Link> | <Link to="settings">Settings</Link>
            </nav>
            <Outlet /> {/* Nested routes will render here */}
        </div>
    );
};
