import React, { ReactElement } from "react";

type StatCardProps = {
    statTitle: string;
    statValue: string | number;
    statIcon: ReactElement
    className: string;
};

export default function StatCard({
    statTitle,
    statValue,
    statIcon,
    className,
}: StatCardProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center bg-slate-950 hover:bg-slate-900 select-none border border-white rounded-lg ${className}`}
        >
            <div className="flex items-center p-5 mt-2 justify-between w-full h-1/3">
                <h2 className="text-white text-lg">{statTitle}</h2>
                {statIcon}
            </div>
            <div className="flex w-full h-2/3 items-center justify-center">
                <span className="text-white font-semibold text-2xl">{statValue}</span>
            </div>
        </div>
    );
}
