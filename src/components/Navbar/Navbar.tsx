import { Link } from "react-router";
import MenuMobile from "./menumobile/MenuMobile";
import icon from "../../assets/image/rhsys.png";

function Navbar() {
  return (
    <>
      <div
        className="w-[50px] md:w-5/6 xl:w-4/6 2xl:w-1/2 h-1 md:h-[60px] bg-violet-300/70 text-white
                flex justify-between items-center py-6 rounded-[90px] md:rounded-[10px] 
                fixed z-10 top-0 left-1/2 transform -translate-x-1/2 md:pl-[30px] md:pr-[30px] mt-[3dvh] 
                shadow-lg backdrop-blur-xl"
      >
        <div className="container justify-between text-lg hidden md:flex">
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
              to="/funcionarios"
              className=" hover:text-violet-900 transition-all duration-400 ease-in-out"
            >
              Funcionarios
            </Link>
            <Link
              to="/sobre"
              className=" hover:text-violet-900 transition-all duration-400 ease-in-out"
            >
              Sobre nós
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <MenuMobile />
        </div>
      </div>
    </>
  );
}

export default Navbar;
