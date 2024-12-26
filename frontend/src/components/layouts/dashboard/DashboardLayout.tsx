import { Outlet } from "react-router";

export default function DashboardLayout() {
    return (
        <div className="flex h-full w-full">
            <Outlet />
        </div>
    );
}
