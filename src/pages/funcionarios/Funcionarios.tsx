import { useState } from "react";
import BoxFuncionarios from "../../components/funcionarios/boxfuncionarios/BoxFuncionarios";
import Sidebar from "../../components/funcionarios/sidebar/Sidebar";
import SearchBar from "../../components/funcionarios/searchbar/SearchBar";

function Funcionarios() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  const funcionarios = [
    { nome: "Carlos Silva", cargo: "Frontend Developer" },
    { nome: "Maria Aparecida Oliveira", cargo: "Backend Developer" },
    { nome: "Julia Dias Nobre", cargo: "Product Owner" },
    { nome: "Henrique Santos Lima", cargo: "Frontend Developer" },
    { nome: "Pedro Henrique Costa", cargo: "UX/UI Designer" },
    { nome: "Ana Clara Lima", cargo: "QA Engineer" },
    { nome: "Lucas Ferreira Souza", cargo: "DevOps Engineer" },
    { nome: "Carla Almeida Pinto", cargo: "Data Scientist" },
    { nome: "Juliano Ribeiro Santos", cargo: "Software Architect" },
    { nome: "Mariana Duarte Almeida", cargo: "Business Analyst" },
    { nome: "Felipe Pereira Rocha", cargo: "Product Manager" },
    { nome: "Roberta Fernandes Lima", cargo: "Marketing Specialist" },
    { nome: "Tiago Martins Souza", cargo: "Fullstack Developer" },
    { nome: "Vanessa Oliveira Santos", cargo: "Graphic Designer" },
    { nome: "João Pedro Alves", cargo: "System Administrator" },
    { nome: "Fernanda Costa Rocha", cargo: "Data Analyst" },
    { nome: "Rafael Pereira Martins", cargo: "Security Engineer" },
    { nome: "Beatriz Silva Santos", cargo: "HR Manager" },
    { nome: "Eduardo Gonçalves", cargo: "Network Engineer" },
    { nome: "Larissa Mendes Nunes", cargo: "Scrum Master" },
  ];
  
  

  return (
    <div className="flex flex-col items-center gap-4 pt-40 h-full">
      <div className="w-5/6 lg:w-[60rem]">
        {/* Componente de Pesquisa */}
        <div className="mb-4">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>

        <div className="flex gap-4">
          {/* Barra Lateral */}
          <Sidebar setFilter={setFilter} funcionarios={funcionarios}/>

          {/* Box de Funcionários */}
          <BoxFuncionarios
            funcionarios={funcionarios}
            searchQuery={searchQuery}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default Funcionarios;
