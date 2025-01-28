import { Link } from "react-router";
import MenuMobile from "./menumobile/MenuMobile";
import icon from "../../assets/image/rhsys.png";

function Navbar() {
    return (
        <>
            <div
                className="w-full md:w-5/6 xl:w-4/6 2xl:w-1/2 md:h-[60px] bg-violet-100 text-violet-600 
                flex justify-between items-center py-6 rounded-[90px] md:rounded-[10px] 
                fixed z-10 top-0 left-1/2 transform -translate-x-1/2 md:pl-[30px] md:pr-[30px] mt-[3dvh] 
                shadow-lg "
            >
                <Link
                    to="/home"
                    className="text-lg font-light flex items-center gap-2 hover:text-violet-800 transition-all duration-400 ease-in-out"
                >
                    <img
                        src={icon}
                        alt="Logo"
                        className="h-20 w-20 transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                    
                </Link>

                <div className="flex gap-4 text-base font-light items-center">
                    <Link
                        to="/produtos"
                        className="text-violet-500 hover:text-violet-900 transition-all duration-400 ease-in-out"
                    >
                        Produtos
                    </Link>
                    <Link
                        to="/sobrenos"
                        className="text-violet-500 hover:text-violet-900 transition-all duration-400 ease-in-out"
                    >
                        Sobre nós
                    </Link>
                </div>

                <div className="md:hidden">
                    <MenuMobile />
                </div>
            </div>
        </>
    );
}

export default Navbar;
