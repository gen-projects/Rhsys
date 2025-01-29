interface CardFuncionarioProps {
  nome: string;
  cargo: string;
}

function CardFuncionario({ nome, cargo }: CardFuncionarioProps) {
  return (
    <div
      className="bg-violet-200 w-40 h-52 rounded-lg flex flex-col gap-3
                justify-center items-center hover:bg-violet-100
                hover:scale-105 hover:shadow-violet-300 cursor-pointer p-3
                hover:shadow-[0_0_15px_10px_rgba(139,92,246,0.9)] transition-all 
                duration-300"
    >
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        className="w-16 h-16 rounded-md"
      />

      <div className="w-full text-center">
        <p className="text-violet-900 font-bold text-md h-7 overflow-hidden text-ellipsis whitespace-nowrap">
          {nome}
        </p>
        <p className="text-violet-800 text-sm h-6 overflow-hidden text-ellipsis whitespace-nowrap">
          {cargo}
        </p>
      </div>
    </div>
  );
}

export default CardFuncionario;
