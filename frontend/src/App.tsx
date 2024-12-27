import { Navigate, Route, Routes } from "react-router";
import CivDashboardLayout from "./components/layouts/dashboard/civ/CivDashboardLayout";
import DashboardLayout from "./components/layouts/dashboard/DashboardLayout";
import MainLayout from "./components/layouts/main/MainLayout";
import AuthenticationLayout from "./components/layouts/authentication/AuthenticationLayout";
import LoginLayout from "./components/layouts/authentication/login/LoginLayout";
import SignUpLayout from "./components/layouts/authentication/signup/SignUpLayout";
import UserDashboardLayout from "./components/layouts/dashboard/user/UserDashboardLayout";

function App() {
    return (
        <>
            <div className="font-inter bg-slate-950 h-screen w-screen">
                <Routes>
                    <Route
                        path=""
                        element={<Navigate to="home/dashboard/user" />}
                    />
                    <Route path="home" element={<MainLayout />}>
                        <Route path="dashboard" element={<DashboardLayout />}>
                            <Route
                                path="civ"
                                element={<CivDashboardLayout />}
                            />
                            <Route
                                path="user"
                                element={<UserDashboardLayout />}
                            />
                        </Route>
                    </Route>
                    <Route path="auth" element={<AuthenticationLayout />}>
                        <Route path="" element={<Navigate to="login" />} />
                        <Route path="login" element={<LoginLayout />} />
                        <Route path="signup" element={<SignUpLayout />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
