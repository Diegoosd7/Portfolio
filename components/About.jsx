import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function About({ language }) {
    return(
        <section class="px-5 py-20 pb-5">
            <div>
                <div class="flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark">
                    <FontAwesomeIcon icon={faLocationDot} className="text-sm" />
                    <span class="font-normal lg:text-lg">Madrid / Toledo</span>
                </div>
                <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl mt-4">
                    {language === 'es' ? 'Sobre Mí' : 'About Me'}
                </h2>
                <div class="flex flex-wrap flex-col lg:flex-row items-center lg:items-start justify-between gap-6 mt-4">
                    <div class="flex-1 flex-col">
                        <p class="font-light text-base text-text-secondary dark:text-text-secondary-dark lg:text-xl">
                            {language === 'es' 
                                ? 'Como Ingeniero Informático especializado en desarrollo Backend y Cloud Native, me enfoco en crear soluciones escalables, seguras y eficientes. Actualmente trabajo en entornos de alta disponibilidad utilizando C++ y Kubernetes, aplicando metodologías ágiles para asegurar la entrega continua. Soy una persona trabajadora, organizada y responsable. Me considero resolutivo y proactivo, con gran capacidad para adaptarme a nuevos retos y con muchas ganas de desarrollar continuamente mis habilidades para crecer profesionalmente.'
                                : 'As a Software Engineer specializing in Backend and Cloud Native development, I focus on building scalable, secure, and efficient solutions. I currently work in high-availability environments using C++ and Kubernetes, applying agile methodologies to ensure continuous delivery. I am a hardworking, organized, and responsible person. I consider myself a proactive problem-solver, highly adaptable to new challenges, and eager to continuously develop my skills to grow professionally.'
                            }
                        </p>
                        <div class="mt-6 flex flex-wrap gap-3">
                            <span class="bg-black/5 dark:bg-white/10 text-text-primary dark:text-text-primary-dark text-sm font-medium px-3 py-1 rounded-lg border border-black/20 dark:border-gray-200/20">
                                {language === 'es' ? 'Español (Nativo)' : 'Spanish (Native)'}
                            </span>
                            <span class="bg-black/5 dark:bg-white/10 text-text-primary dark:text-text-primary-dark text-sm font-medium px-3 py-1 rounded-lg border border-black/20 dark:border-gray-200/20">
                                {language === 'es' ? 'Inglés (B2-C1)' : 'English (B2-C1)'}
                            </span>
                        </div>
                    </div>
                    <div class="flex shrink-0 justify-center">
                        <img class="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-105 focus:scale-105 focus:shadow-xl focus:brightness-105 focus:outline-none" src="./foto.jpg" alt="Foto de Diego" />
                    </div>
                </div>
            </div>
        </section>
    );
}