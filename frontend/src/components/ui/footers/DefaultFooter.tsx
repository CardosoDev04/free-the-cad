export default function DefaultFooter() {
    return (
        <div className="flex text-white space-y-2 select-none opacity-50 items-center justify-center flex-col w-full h-[10%]">
            <span onClick={() => window.open("https://github.com/CardosoDev04/free-the-cad", "_blank")} className="text-sm hover:text-slate-500 hover:cursor-pointer">
                Free The Cad - An open source CAD alternative
            </span>
            <span className="text-xs text-center">
                This software is under the GNU Public v3 license<br/> You can view details about licensing and permissions <span onClick={() => window.open("https://www.gnu.org/licenses/gpl-3.0.en.html", "_blank")} className="hover:text-slate-500 hover:cursor-pointer underline">here.</span>
            </span>
        </div>
    );
}
