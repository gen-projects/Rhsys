import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-violet-400/70  text-white">
      <div className="container mx-auto flex flex-col items-center space-y-4 py-6 md:flex-row md:justify-between md:space-y-0 md:py-8">
        {/* Seção de Copyright */}
        <div className="text-center md:text-left">
          <p className="text-xl font-bold">Rhsys</p>
          <p className="text-sm">© {currentYear} | Todos os direitos reservados.</p>
        </div>

        {/* Redes Sociais */}
        <div className="text-center">
          <p className="text-lg font-medium">Acesse nossas redes sociais:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://www.linkedin.com/school/generationbrasil/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a
              href="https://www.instagram.com/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <InstagramLogo size={48} weight="bold" />
            </a>
            <a
              href="https://web.facebook.com/generationbrasil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              <FacebookLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
