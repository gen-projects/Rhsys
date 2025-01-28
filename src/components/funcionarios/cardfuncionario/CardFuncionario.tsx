





interface cardFuncionarioProps {
  nome: string;
  cargo: string;
}




function CardFuncionario({nome, cargo}: cardFuncionarioProps) {
  return (
    <div
      className="bg-violet-200 w-40 h-55 rounded-lg flex flex-col gap-4
                justify-evenly items-center  hover:bg-violet-100
                hover:scale-105 hover:shadow-violet-300 cursor-pointer p-3
                hover:shadow-[0_0_15px_10px_rgba(139,92,246,0.9)] transition-all 
                duration-300"
    >
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        className="w-17 h-17 rounded-md"
      />

      <div>
        <p className="text-violet-900 text-md font-bold  text-center">
          {nome}
        </p>

        <p className="text-violet-800 text-sm text-center">{cargo}</p>
      </div>

    </div>
  );
}

export default CardFuncionario;
