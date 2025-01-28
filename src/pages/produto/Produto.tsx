import BoxFuncionarios from "../../components/funcionarios/boxfuncionarios/BoxFuncionarios";

function Produto() {
  return (
    <div className="flex flex-col items-center gap-4 mt-30">
      <div className="w-5/6">
        <BoxFuncionarios />
      </div>
    </div>
  );
}

export default Produto;
