import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "TradeFlow",
      description: "Application for practicing trading with real-time stock market data.",
      image: "/TradeFlow.jpg",
      url: "https://github.com/jatishbhatia/Portfolio-Dashboard", // Replace with the actual link
    },
    {
      title: "Monte Carlo Search AI Bot",
      description: "A game-playing AI agent that uses Monte Carlo Search and Minimax to create simulations to decide the best next move against an adversarial agent.",
      image: "/MCS_bot.gif",
      url: "https://github.com/AlySaleh1/Monte-Carlo-AI-Bot/tree/main", // Replace with the actual link
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md block transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-72">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
