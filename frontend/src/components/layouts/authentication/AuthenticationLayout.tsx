import { Outlet } from "react-router";

export default function AuthenticationLayout() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex w-2/4 rounded-xl h-2/3">
                <div className="w-1/2 bg-slate-900 rounded-s-xl h-full">
                    <img
                        alt="cad-logo"
                        src="https://cdn.jsdelivr.net/gh/CardosoDev04/cdn-test/free-the-cad.png"
                        className="w-full h-full"
                    ></img>
                </div>
                <div className="h-full w-1/2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
