interface Funcionario {
  nome: string;
  cargo: string;
}

interface SidebarProps {
  setFilter: (filter: string) => void;
  funcionarios: Funcionario[];
}

function Sidebar({ setFilter, funcionarios }: SidebarProps) {
  const setores = [
    ...new Set(funcionarios.map((funcionario) => funcionario.cargo)),
  ];

  return (
    <div className="w-40 p-4 bg-violet-200 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2 text-indigo-950">
        Filtrar por Setor
      </h3>
      <div className="h-117 scrollable">
        <button
          key="Todos"
          className="block w-full text-left p-2 hover:bg-violet-300 text-slate-800
           hover:text-white rounded-md transition"
          onClick={() => setFilter("Todos")}
        >
          Todos
        </button>
        {setores.map((setor) => (
          <button
            key={setor}
            className="block w-full text-left p-2 hover:bg-violet-300 text-slate-800
             hover:text-white rounded-md transition"
            onClick={() => setFilter(setor)}
          >
            {setor}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
