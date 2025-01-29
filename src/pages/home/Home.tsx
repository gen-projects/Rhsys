import CardHome from "../../components/cardHome/CardHome"

function Home() {
    console.log("Home carregada!!")
    return (
        <>
            <div className="bg-violet-200 flex justify-center pt-30 min-h-[85dvh]">
                <div className="flex flex-col gap-4 items-center justify-center py-4 max-w-[90vw] ">
                    <h2 className="text-indigo-950 text-5xl font-bold">
                        RHsys
                    </h2>
                    <p className="text-slate-800 text-xl w-full max-w-[90%] md:max-w-4xl text-center mt-7">
                        Um sistema de gerenciamento para Recursos Humanos, que busca facilitar o processo de cadastro e acompanhamento dos funcionários, gerenciando as informações em um único lugar e fornecendo relatórios personalizados.
                    </p>

                    <div className="flex flex-row flex-wrap  justify-center mt-10">
                    <CardHome titulo="Funcionários" descricao="Foco no gerenciamento dos dados e cargos dos funcionários"
                                    img="https://i.imgur.com/5ySMOvG.png" alt="Person icon by Icons8"/>
                    <CardHome titulo="Contratos" descricao="Facilidade de inserir e gerenciar os contratos de trabalho."
                                    img="https://i.imgur.com/ZntN5og.png" alt="Pen icon by Icons8"/>
                    <CardHome titulo="Ferramentas" descricao="Facilidade nas análises através da ferramente de relatórios personalizados."
                                    img="https://i.imgur.com/jTT4MEv.png" alt="Gear icon by Icons8"/>
                    </div>
                    
                </div>
            </div>
        </>
)
}

export default Home