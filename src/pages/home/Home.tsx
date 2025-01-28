import CardHome from "../../components/cardHome/CardHome"

function Home() {
    console.log("Home carregada!!")
    return (
        <>
            <div className="bg-violet-400/25 flex justify-center">
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className="text-5xl font-bold">
                        RHsys
                    </h2>
                    <p className="text-xl max-w-4xl text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum elit elit, sed accumsan augue sed accumsan augue.
                    </p>

                    <div className="flex flex-row">
                    <CardHome titulo="Lorem ipsum" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    img="https://i.imgur.com/5ySMOvG.png" alt="Person icon by Icons8"/>
                    <CardHome titulo="Lorem ipsum" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    img="https://i.imgur.com/ZntN5og.png" alt="Pen icon by Icons8"/>
                    <CardHome titulo="Lorem ipsum" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    img="https://i.imgur.com/jTT4MEv.png" alt="Gear icon by Icons8"/>
                    </div>
                    
                </div>
            </div>
        </>
)
}

export default Home