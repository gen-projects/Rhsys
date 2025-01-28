function SobreNos() {
    return (
        <>
            <div className="flex flex-col items-center justify-center m-auto p-15 bg-violet-400/25 mt-30">
                <h1 className="text-5xl font-bold text-center my-10">Sobre nós</h1>
                <div className="flex justify-center">
                    <p className="text-xl w-xl pr-24">
                        Suspendisse vitae consequat risus, vel pellentesque ex. 
                        Morbi ipsum neque, tempor non nunc ut, porta pulvinar augue. 
                        Pellentesque nisl lacus, efficitur mattis elit non, tincidunt ultrices tellus. 
                        Nam luctus magna in metus consectetur euismod. 
                        Aliquam sed velit vestibulum, eleifend tellus id, lobortis velit. 
                    </p> 
                    <img
                        src="https://ik.imagekit.io/lc8deswzl/istockphoto-1407536875-612x612.jpg?updatedAt=1738078618844"
                        alt="Imagem página sobré nós"
                            className='w-1/3 rounded-4xl'
                    />
                </div>
            </div>
        </>
    );

}

export default SobreNos;