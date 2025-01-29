import CardFuncionario from "../cardfuncionario/CardFuncionario";
import "./BoxFuncionarios.css";

interface Funcionario {
  nome: string;
  cargo: string;
}

interface BoxFuncionariosProps {
  funcionarios: Funcionario[];
  searchQuery: string;
  filter: string;
}

function BoxFuncionarios({
  funcionarios,
  searchQuery,
  filter,
}: BoxFuncionariosProps) {
  const filteredFuncionarios = funcionarios.filter(({ nome, cargo }) => {
    const matchesSearch = nome
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "Todos" || cargo.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-10 bg-violet-300/75 rounded-lg w-full h-full scrollable">
      <div className="flex flex-wrap gap-5 justify-start mt-4">
        {filteredFuncionarios.map(({ nome, cargo }, index) => (
          <CardFuncionario key={index} nome={nome} cargo={cargo} />
        ))}
      </div>
    </div>
  );
}

export default BoxFuncionarios;
