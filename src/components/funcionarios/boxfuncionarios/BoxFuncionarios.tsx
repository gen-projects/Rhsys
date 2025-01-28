import CardFuncionario from "../cardfuncionario/CardFuncionario";
import './BoxFuncionarios.css';

function BoxFuncionarios() {
  return (
    <div className="p-10 bg-violet-300/75 rounded-lg w-full h-full scrollable">
      <div className="flex flex-wrap gap-5 justify-start">
        <CardFuncionario nome={"Carlos"} cargo={"Frontend Developer"} />
        <CardFuncionario nome={"Maria Aparecida"} cargo={"Backend Developer"} />
        <CardFuncionario nome={"Julia Dias Nobre"} cargo={"Product Owner"} />
        <CardFuncionario nome={"Henrique Santos Lima"} cargo={"Frontend Developer"} />
        <CardFuncionario nome={"Carlos"} cargo={"Frontend Developer"} />
        <CardFuncionario nome={"Carlos"} cargo={"Frontend Developer"} />
        <CardFuncionario nome={"Maria Aparecida"} cargo={"Backend Developer"} />
        <CardFuncionario nome={"Julia Dias Nobre"} cargo={"Product Owner"} />
        <CardFuncionario nome={"Henrique Santos Lima"} cargo={"Frontend Developer"} />
        <CardFuncionario nome={"Carlos"} cargo={"Frontend Developer"} />
      </div>
    </div>
  );
}

export default BoxFuncionarios;
