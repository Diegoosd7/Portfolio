import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { projects } from '../data/projectsData';

export default function Projects({ language }){
    const [showVideo, setShowVideo] = useState(null);

    return (
        <section class="px-5 py-5 pt-20">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">
                    {language === 'es' ? 'Proyectos' : 'Projects'}
                </h2>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {projects.map((project, index) => {
                        return (
                            <div key={index} class="border bg-black/5 border-black/20 dark:border-gray-200/20 mt-4 rounded-xl overflow-hidden max-w-3xl hover:border-text-primary/80 dark:hover:border-text-primary-dark/80 transition-colors duration-300 ease-in-out flex flex-col">
                                <div class="overflow-hidden relative h-48 sm:h-56">
                                    <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" src={project.img} alt={project.name_es || project.name} />
                                </div>
                                
                                <div class="p-4 flex flex-col flex-grow">
                                    <div class="flex justify-between items-start gap-4 mb-2">
                                        <h4 class="font-medium text-xl text-text-primary dark:text-text-primary-dark">
                                            {language === 'es' ? (project.name_es || project.name) : (project.name_en || project.name)}
                                        </h4>
                                        
                                        {project.name_es === "AJToolkit" && (
                                            <span class="shrink-0 inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500 text-xs font-semibold px-2.5 py-1 rounded-full border border-yellow-300 dark:border-yellow-700/50">
                                            TFG
                                            </span>
                                        )}
                                    </div>

                                    {(project.subtitle_es || project.subtitle_en) && (
                                        <p class="text-xs italic text-text-secondary dark:text-text-secondary-dark mb-1">
                                            {language === 'es' ? project.subtitle_es : project.subtitle_en}
                                        </p>
                                    )}
                                    
                                    <p class="font-extralight text-sm text-text-secondary dark:text-text-secondary-dark flex-grow mt-1">
                                        {language === 'es' ? (project.description_es || project.description) : (project.description_en || project.description)}
                                    </p>
                                    
                                    <div class="flex flex-wrap items-center gap-2 mt-4">
                                        {project.categories.map((category, catIndex) => {
                                            return(
                                                <span key={catIndex} class="flex items-center gap-1 bg-back border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg">
                                                    <i class={`${category.icon} text-xs`}></i>
                                                    {category.name}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    
                                    <div class="flex items-center gap-2 mt-4">
                                        {project.github && <a class="group border border-black/20 dark:border-gray-200/20 p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark text-xs font-light hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-black/30 transition-colors duration-300 ease-in-out" href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} className="text-sm mr-1" />
                                            Github
                                            <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                        </a>}
                                        {project.demo && <a class="group border border-black/20 dark:border-gray-200/20 p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark text-xs font-light hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-black/30 transition-colors duration-300 ease-in-out" href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGlobe} className="text-sm mr-1" />
                                            Demo
                                            <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                        </a>}
                                        {project.video && (
                                            <>
                                                <button 
                                                    onClick={() => setShowVideo(project.video)}
                                                    class="group border border-black/20 dark:border-gray-200/20 p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark text-xs font-light hover:text-text-primary dark:hover:text-text-primary-dark hover:bg-black/30 transition-colors duration-300 ease-in-out cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faYoutube} className="text-sm mr-1" />
                                                    Video
                                                    <FontAwesomeIcon icon={faAngleDoubleRight} className="ml-1 group-hover:motion-preset-wobble motion-duration-600" />
                                                </button>
                                                {showVideo === project.video && (
                                                    <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowVideo(null)}>
                                                        <div class="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                                                            <button 
                                                                onClick={() => setShowVideo(null)}
                                                                class="absolute -top-10 right-0 text-white hover:text-gray-300 cursor-pointer"
                                                            >
                                                                <FontAwesomeIcon icon={faTimes} size="lg" />
                                                            </button>
                                                            <div class="aspect-video w-full bg-black rounded-lg overflow-hidden">
                                                                {project.video.endsWith('.mp4') ? (
                                                                    <video 
                                                                        src={project.video} 
                                                                        controls 
                                                                        autoPlay 
                                                                        class="w-full h-full object-contain"
                                                                    />
                                                                ) : (
                                                                    <iframe 
                                                                        src={project.video.replace('watch?v=', 'embed/')}
                                                                        class="w-full h-full"
                                                                        frameBorder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                    ></iframe>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}