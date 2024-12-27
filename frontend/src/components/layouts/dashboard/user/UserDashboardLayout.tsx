import StatsPanel from "@/components/ui/dashboard/user/StatsPanel";
import UserInfoBar from "@/components/ui/dashboard/user/UserInfoBar";
import React from "react";

export default function UserDashboardLayout() {
    return (
        <div className="flex flex-col justify-center p-10 items-center w-full h-full">
            <section id="user-info-section" className="flex p-10 w-full h-1/5">
                <UserInfoBar userPermissionDisplayName="Admin" userDisplayName="John Doe"/>
            </section>
            <section
                id="user-action-section"
                className="flex justify-center items-center space-x-5 h-4/5 w-full"
            >
                <div className="h-full w-2/3 border border-slate-50 bg-slate-950 rounded-lg">
                    <StatsPanel/>
                </div>
                <div className="h-full w-1/3 border border-slate-50 bg-slate-950 rounded-lg">
                
                </div>
            </section>
        </div>
    );
}
