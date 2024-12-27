import React from "react";
import { Avatar } from "./Avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "../../misc/Badge";
import { SimpleButton } from "../../buttons/SimpleButton";

type UserInfoBarProps = {
    userDisplayName: string;
    userPermissionDisplayName: string;
};

export default function UserInfoBar({
    userDisplayName,
    userPermissionDisplayName,
}: UserInfoBarProps) {
    return (
        <div className="flex justify-between items-center w-full h-full">
            <div className="flex space-y-5 items-center justify-between w-full h-full">
                <h2 className="text-white select-none font-semibold text-4xl">
                    Welcome back, {userDisplayName}.
                </h2>
                <div className="flex items-center justify-start space-x-5">
                    <span className="text-xl text-white select-none">Your current role is</span>
                    <Badge
                        variant="secondary"
                        className="w-20 h-10 text-center items-center text-lg select-none"
                    >
                        {userPermissionDisplayName}
                    </Badge>
                    <SimpleButton
                        variant="default"
                        className="border border-white hover:scale-105 hover:bg-white hover:text-slate-950 transition-transform"
                    >
                        Access the admin panel
                    </SimpleButton>
                </div>
            </div>
        </div>
    );
}
