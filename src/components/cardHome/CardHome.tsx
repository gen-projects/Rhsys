
interface cardHomeProps{
    titulo: string;
    descricao: string;
    img: string;
    alt: string;
}

function CardHome(props: cardHomeProps) {
    return (
        <div className="relative w-48 h-64 rounded-2xl bg-gray-100 border-1 border-gray-300 
                        p-7 transition ease-out hover:border-blue-500 hover:shadow-lg mx-7 my-7 cursor-pointer">
            <div className="grid h-full gap-2 text-black text-center">
                <div className="flex flex-col items-center justify-center">
                    <img src={props.img} alt={props.alt} />
                    <p className="text-xl font-bold">{props.titulo}</p>
                </div>
                <p className="text-gray-600">{props.descricao}</p>
            </div>
        </div>
    )
}

export default CardHome