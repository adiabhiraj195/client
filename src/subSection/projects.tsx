import SectionHeading from "../components/section-heading";
import { TiDocumentText } from "react-icons/ti";
import ProjectCard from '../components/project-card';
import moviesiteImg from "../utilities/project1.png";
import olximage from "../utilities/project2.png";

const Projects = () => {
    const Moviedump = {
        title: "Moviedump",
        image: moviesiteImg,
        keyTec: "API & React",
        repositore: "https://github.com/adiabhiraj195/aadis-movie-search",
        live: "https://movdump.netlify.app/",
        about: "This site fetches the latest data on movies and TV series using an API, and filters them according to their popularity and rating on IMDB. It also has a search functionality for movies and web series using keywords related to the content."
    }
    const Olx = {
        title: "Olx Clone",
        image: olximage,
        keyTec: "React Firebase Authentication",
        repositore: "https://github.com/adiabhiraj195/Olx-app",
        live: "https://olx-app-aaf19.web.app/",
        about: "This website is a clone of OLX and has almost all the functionalities of the OLX site. You can search for products, upload something to sell, and use different filters to refine your product search according to your needs."
    }

    return (
        <div>
            <SectionHeading heading='PROJECTS' Icon={TiDocumentText} />

            <div className='mb-20'>
                <ProjectCard
                    Title={Moviedump.title}
                    Image={Moviedump.image}
                    About={Moviedump.about}
                    KeyTec={Moviedump.keyTec}
                    repositore={Moviedump.repositore}
                    liveLink={Moviedump.live}
                />

                <ProjectCard
                    Title={Olx.title}
                    Image={Olx.image}
                    About={Olx.about}
                    KeyTec={Olx.keyTec}
                    repositore={Olx.repositore}
                    liveLink={Olx.live}
                />
            </div>
        </div>
    )
}

export default Projects;