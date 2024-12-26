import { Input } from "@/components/ui/inputs/Input";
import { Label } from "@/components/ui/labels/SimpleLabel";
import { SimpleButton } from "../../buttons/SimpleButton";
import { useNavigate } from "react-router";

export default function LoginForm() {
    const navigate = useNavigate()
    return (
        <div className="flex space-y-10 justify-start py-16 px-10 flex-col bg-white rounded-e-xl w-full h-full">
            <section
                id="title-section"
                className="flex py-5 w-full h-[10%] flex-col space-y-2"
            >
                <h2 className="text-3xl text-start font-medium">Sign in</h2>
                <span className="text-md opacity-75 text-start">
                    Enter your credentials below to access the CAD.
                </span>
            </section>
            <section
                id="input-section"
                className="flex flex-col pt-10 space-y-5 justify-center w-full h-2/4"
            >
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="w-full">Email</Label>
                    <Input type="email" className="w-full" placeholder="Enter your email address" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email" className="w-full">Password</Label>
                    <Input type="password" className="w-full" placeholder="Enter your password" />
                </div>
            </section>
            <section
                id="action-section"
                className="flex flex-col space-y-2 justify-center w-full h-[10%]"
            >
                <SimpleButton>Login</SimpleButton>
                <span className="select-none text-gray-700 w-full text-center">Don't have an account yet? <span onClick={() => navigate("/auth/signup")} className="hover:text-slate-950 hover:cursor-pointer">Sign up.</span></span>
            </section>
        </div>
    );
}
