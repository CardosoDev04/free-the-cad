import React from "react";
import StatCard from "./StatCard";
import { Shield, Users } from "lucide-react";

export default function StatsPanel() {
    return (
        <div className="grid grid-cols-3 justify-center align-middle gap-x-10 p-10 h-1/3 rounded-xl">
            <StatCard
                statIcon={<Users className="text-white w-4 h-4" />}
                statTitle={"Your active characters"}
                statValue={5}
                className={"w-full h-32"}
            />
            <StatCard
                statTitle={"Admins currently online"}
                statValue={10}
                statIcon={<Shield className="text-white h-4 w-4" />}
                className={"w-full h-32"}
            />
            <StatCard
                statTitle={"Active emergency units"}
                statValue={33}
                statIcon={<Shield className="text-white h-4 w-4" />}
                className={"w-full h-32"}
            />
        </div>
    );
}
