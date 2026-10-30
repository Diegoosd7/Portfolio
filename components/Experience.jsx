export default function WorkExperience({ language }) {
    return (
        <section class="px-5">
            <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">
                {language === 'es' ? 'Experiencia Laboral' : 'Experience'}
            </h2>
            <div class="mt-5">
                
                {/* Ericsson - Actual */}
                <div class="relative pl-5 pb-8">
                    <div class="absolute left-0 top-2 h-full w-px bg-text-tertiary-dark"></div>
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-green-500"></div>
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-green-500 animate-ping"></div>
                    <h4 class="font-light text-md text-text-tertiary dark:text-text-tertiary-dark pt-0.5 lg:text-lg">
                        {language === 'es' ? 'Septiembre 2026 - Actualidad' : 'September 2026 - Present'}
                    </h4>
                    <div class="flex items-center gap-2 py-2">
                        <img src="./ericsson.webp" alt="Ericsson" class="h-8 w-auto dark:bg-white/90 p-1" />
                        <h3 class="font-medium text-lg text-text-primary dark:text-text-primary-dark lg:text-xl">
                            Ericsson - Software Developer
                        </h3>
                    </div>
                    <p class="font-light text-base text-text-secondary dark:text-text-secondary-dark lg:text-lg mt-2">
                        {language === 'es' 
                            ? 'Desarrollo de microservicios cloud native en C++ para el proyecto Cloud Core Subscription Manager (CCSM). Implementación de soluciones basadas en Kubernetes para el despliegue de funciones de red 5G y 4G (UDM/ARPF, AUSF) bajo metodologías ágiles, colaborando en un equipo multifuncional enfocado en la entrega continua.'
                            : 'Development of cloud-native microservices in C++ for the Cloud Core Subscription Manager (CCSM) project. Implementation of Kubernetes-based solutions for the deployment of 5G and 4G network functions (UDM/ARPF, AUSF) under agile methodologies, actively collaborating in a cross-functional team focused on continuous delivery.'
                        }
                    </p>
                </div>

                {/* Ericsson - Prácticas */}
                <div class="relative pl-5 pb-8">
                    <div class="absolute left-0 top-2 h-full w-px bg-text-tertiary-dark"></div>
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-text-primary dark:bg-text-primary-dark"></div>
                    <h4 class="font-light text-md text-text-tertiary dark:text-text-tertiary-dark pt-0.5 lg:text-lg">
                        {language === 'es' ? 'Enero 2026 - Julio 2026' : 'January 2026 - July 2026'}
                    </h4>
                    <div class="flex items-center gap-2 py-2">
                        <img src="./ericsson.webp" alt="Ericsson" class="h-8 w-auto dark:bg-white/90 p-1" />
                        <h3 class="font-medium text-lg text-text-primary dark:text-text-primary-dark lg:text-xl">
                            {language === 'es' ? 'Ericsson - Beca Change Maker' : 'Ericsson - Change Maker Internship'}
                        </h3>
                    </div>
                    <p class="font-light text-base text-text-secondary dark:text-text-secondary-dark lg:text-lg mt-2">
                        {language === 'es' 
                            ? 'Migración y modernización de dos aplicaciones basadas en Excel hacia soluciones web, participando en el desarrollo y evolución de las nuevas plataformas y sus funcionalidades. Posterior incorporación a los equipos de desarrollo AUSF y ARPF.'
                            : 'Migration and modernization of two Excel-based applications to web solutions, participating in the development and evolution of the new platforms and their features. Later integration into the AUSF and ARPF development teams.'
                        }
                    </p>
                </div>

                {/* NTT DATA */}
                <div class="relative pl-5 pb-8">
                    <div class="absolute left-0 top-2 h-full w-px bg-text-tertiary-dark"></div>
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-text-primary dark:bg-text-primary-dark"></div>
                    <h4 class="font-light text-md text-text-tertiary dark:text-text-tertiary-dark pt-0.5 lg:text-lg">
                        {language === 'es' ? 'Abril 2022 - Junio 2022' : 'April 2022 - June 2022'}
                    </h4>
                    <div class="flex items-center gap-2 py-2">
                        <img src="./nttdata.png" alt="NTT DATA" class="h-8 w-auto" />
                        <h3 class="font-medium text-lg text-text-primary dark:text-text-primary-dark lg:text-xl">
                            {language === 'es' ? 'NTT DATA - Prácticas Profesionales (FCT)' : 'NTT DATA - Professional Internship'}
                        </h3>
                    </div>
                    <p class="font-light text-base text-text-secondary dark:text-text-secondary-dark lg:text-lg mt-2">
                        {language === 'es' 
                            ? 'Migración, creación y actualización de contenidos de una intranet corporativa utilizando tecnología Liferay.'
                            : 'Migration, creation, and updating of corporate intranet content using Liferay technology.'
                        }
                    </p>
                </div>
                
                {/* Socorrista */}
                <div class="relative pl-5">
                    <div class="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-text-primary dark:bg-text-primary-dark"></div>
                    <h4 class="font-light text-md text-text-tertiary dark:text-text-tertiary-dark pt-0.5 lg:text-lg">
                        {language === 'es' ? '2020 - 2024 (Temporadas de Verano)' : '2020 - 2024 (Summer Seasons)'}
                    </h4>
                    <div class="flex items-center gap-2 py-2">
                        <img src="./flotador.png" alt="Soluciones Comu S.L - Socorrista" class="h-8 w-auto" />
                        <h3 class="font-medium text-lg text-text-primary dark:text-text-primary-dark lg:text-xl">
                            {language === 'es' ? 'Soluciones Comu S.L - Socorrista' : 'Soluciones Comu S.L - Lifeguard'}
                        </h3>
                    </div>
                    <p class="font-light text-base text-text-secondary dark:text-text-secondary-dark lg:text-lg mt-2">
                        {language === 'es' 
                            ? 'Socorrista durante los meses de verano en las temporadas 2020, 2021, 2023 y 2024.'
                            : 'Lifeguard during the summer months in the 2020, 2021, 2023, and 2024 seasons.'
                        }
                    </p>
                </div>
            </div>
        </section>
    );
}