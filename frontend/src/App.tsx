import { Navigate, Route, Routes } from "react-router";
import CivDashboardLayout from "./components/layouts/dashboard/civ-dashboard/CivDashboardLayout";
import DashboardLayout from "./components/layouts/dashboard/DashboardLayout";
import MainLayout from "./components/layouts/main/MainLayout";
import AuthenticationLayout from "./components/layouts/authentication/AuthenticationLayout";
import LoginLayout from "./components/layouts/authentication/login/LoginLayout";
import SignUpLayout from "./components/layouts/authentication/signup/SignUpLayout";

function App() {
    return (
        <>
            <div className="font-inter bg-slate-950 h-screen w-screen">
                <Routes>
                    <Route path="" element={<MainLayout/>}>
                        <Route path="dashboard" element={<DashboardLayout />}>
                            <Route
                                path="civ"
                                element={<CivDashboardLayout />}
                            />
                        </Route>
                        <Route path="auth" element={<AuthenticationLayout/>}>
                            <Route path="" element={<Navigate to="login"/>}/>
                            <Route path="login" element={<LoginLayout/>}/>
                            <Route path="signup" element={<SignUpLayout/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
