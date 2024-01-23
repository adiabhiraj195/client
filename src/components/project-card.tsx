import React from 'react';
import moviesiteImg from "../utilities/project1.png";

const ProjectCard = () => {
    return (
        <div className='flex mb-10'>
            <div className='relative overflow-hidden rounded-xl h-48 opacity-90'>
                <img src={moviesiteImg} alt='site ss'></img>
                <div className='absolute top-0 bg-gray-800 opacity-0 h-full hover:opacity-100'>
                    <p className='text-gray-600 opacity-100'>
                        This site fetches the latest data on movies and TV series using an API, and filters them according to their popularity and rating on IMDB. It also has a search functionality for movies and web series using keywords related to the content.
                    </p>
                </div>
            </div>
            <div className='text-white text-center m-2'>
                <h2>Title</h2>
                <button>Live</button>
                <button>Repositorie</button>
            </div>
        </div>
    )
}

export default ProjectCard;