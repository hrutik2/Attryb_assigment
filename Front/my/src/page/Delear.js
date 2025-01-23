import { Outlet, Link } from "react-router-dom";
import { DealerNavbar } from "../component/DealerNavbar";

export const Delear = () => {
    return (
        <div>
            <DealerNavbar/>
            <Outlet />
        </div>
    );
};
