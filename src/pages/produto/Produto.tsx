import BoxFuncionarios from "../../components/funcionarios/boxfuncionarios/BoxFuncionarios";

function Produto() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-violet-900 text-6xl font-bold p-5">Funcionários</h1>
      <div className="w-5/6">
        <BoxFuncionarios />
      </div>
    </div>
  );
}

export default Produto;
