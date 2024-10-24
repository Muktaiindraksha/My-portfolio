import crypto from "../assets/crypto.png";
import Formvalidation from "../assets/form-validation.png";
import Todolist from "../assets/Todolist.png";
import Amazonpage from "../assets/Amazonwebpage.png";
import { AiOutlineGithub } from 'react-icons/ai';  // No need for AiFillGithub as it's not used
import Reveal from './Reveal';

const projects = [
  {
    img: crypto,
    title: "Crypto Dashboard",
    description:
      "A crypto dashboard featuring real-time data fetching from APIs like CoinGecko or CoinMarketCap, data visualization through Chart.js to show price trends and market stats, and search and filtering capabilities for specific coins or market criteria.",
    links: {
      site: "https://crypto-dashboard-tau-topaz.vercel.app/",
      github: "https://github.com/Muktaiindraksha/Crypto_dashboard",
    },
  },
  {
    img: Formvalidation,
    title: "Form Validation",
    description:
      "Implemented client-side and server-side validation to ensure data accuracy and improve user experience by checking for required fields, valid email formats, and password strength.",
    links: {
      site: "https://form-validation-opal-alpha.vercel.app/",
      github: "https://github.com/Muktaiindraksha/Form-validation",
    },
  },
  {
    img: Todolist,
    title: "To-do list",
    description:
      "Completing a to-do list task enhanced my time management, prioritization, and focus. I also learned to use JavaScript for automation, Python for reminders, and HTML/CSS for organizing projects.",
    links: {
      site: "https://to-do-list-teal-ten.vercel.app/",
      github: "https://github.com/Muktaiindraksha/To-do-list",
    },
  },
  {
    img: Amazonpage,
    title: "Amazon-Page",
    description:
      "From my project using simple HTML and CSS, I learned to design a basic layout, structure pages, and style key elements effectively to mimic a user-friendly interface.",
    links: {
      site: "https://amazon-page-nine.vercel.app/",
      github: "https://github.com/Muktaiindraksha/Amazon_page",
    },
  },
];

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="projects">
      <h2 className="mb-8 text-3xl font-bold text-gray-200">Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full p-4 md:w-1/2">
              <img
                src={project.img}
                alt={project.title}
                className="object-contain w-full h-full rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-gray-200">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  target="blank"
                  href={project.links.site}
                  className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700"
                >
                  <AiOutlineGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;
