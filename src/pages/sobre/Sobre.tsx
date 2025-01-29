function Sobre() {
  return (
    <div className="flex flex-col items-center justify-center m-auto px-6 py-10 bg-violet-200 min-h-[85dvh]">
      <h1 className="text-indigo-950 text-4xl md:text-5xl font-bold text-center my-6">
        Sobre nós
      </h1>
      <div
        className="flex flex-col md:flex-row md:gap-50 pt-10 items-center
                         md:items-start justify-center w-full max-w-5xl gap-6"
      >
        <p className="text-slate-800 text-lg text-justify md:text-xl md:w-1/2 leading-relaxed">
          Suspendisse vitae consequat risus, vel pellentesque ex. Morbi ipsum
          neque, tempor non nunc ut, porta pulvinar augue. Pellentesque nisl
          lacus, efficitur mattis elit non, tincidunt ultrices tellus. Nam
          luctus magna in metus consectetur euismod. Aliquam sed velit
          vestibulum, eleifend tellus id, lobortis velit.
        </p>
        <img
          src="https://ik.imagekit.io/lc8deswzl/istockphoto-1407536875-612x612.jpg?updatedAt=1738078618844"
          alt="Imagem página sobre nós"
          className="w-full md:w-1/3 rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Sobre;
