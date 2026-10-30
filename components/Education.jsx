export default function Education({ language }) {
    return(
        <section class="px-5 py-5">
            <div>
                <h2 class="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">
                    {language === 'es' ? 'Educación' : 'Education'}
                </h2>
                
                <div class="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-5 rounded-xl border border-black/20 dark:border-gray-200/20 p-5 mt-4 transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20">
                    <div class="flex-1">
                        <h3 class="font-medium text-lg text-text-primary dark:text-text-primary-dark lg:text-xl">
                            {language === 'es' ? 'Grado en Ingeniería Informática' : "Bachelor's Degree in Computer Science"}
                        </h3>
                        <h4 class="font-light text-md text-text-secondary dark:text-text-secondary-dark lg:text-lg">
                            2022 - 2026
                        </h4>
                        <h5 class="font-normal text-md text-text-primary dark:text-text-primary-dark lg:text-lg">Universidad Carlos III, Madrid</h5>
                        <p class="text-sm mt-2">
                            <span class="font-semibold">{language === 'es' ? 'Calificación:' : 'Grade:'}</span> {language === 'es' ? 'Notable Alto' : ' B'}
                        </p>
                        <p class="text-sm mt-1">
                            <span class="font-semibold">{language === 'es' ? 'Trabajo de Fin de Grado:' : "Bachelor's Thesis:"}</span> {language === 'es' ? 'Detección de audio jailbreaks mediante linear probes en LALM' : 'Audio Jailbreak Detection via Linear Probes in LALMs'}
                        </p>
                        <p class="text-sm mt-1 ml-4 pl-3 border-l border-black/60 dark:border-gray-200/60">
                            <span class="font-semibold">{language === 'es' ? 'Calificación:' : 'Grade:'}</span> {language === 'es' ? '9.7/10 - Candidato a Matrícula de Honor' : '9.7/10 - Honors Candidate'}
                        </p>
                    </div>
                    <a href="https://www.uc3m.es/grado/informatica" target="_blank" rel="noopener noreferrer" class="shrink-0" title="Ver plan de estudios">
                        <img src="./uc3m.png" alt="Universidad Carlos III" class="w-32 md:w-40 h-auto max-h-20 object-contain rounded-md dark:bg-white/90 p-1 transition-transform duration-300 hover:scale-105" />
                    </a>
                </div>

                <div class="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-5 rounded-xl border border-black/20 dark:border-gray-200/20 p-5 mt-4 transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20">
                    <div class="flex-1">
                        <h3 class="font-medium text-lg text-text-primary dark:text-text-primary-dark lg:text-xl">
                            {language === 'es' ? 'Técnico Superior en Desarrollo de Aplicaciones Web' : 'Higher Technician in Web Application Development'}
                        </h3>
                        <h4 class="font-light text-md text-text-secondary dark:text-text-secondary-dark lg:text-lg">2020 - 2022</h4>
                        <h5 class="font-normal text-md text-text-primary dark:text-text-primary-dark lg:text-lg">IES Azarquiel, Toledo</h5>
                        <p class="text-sm mt-2">
                            <span class="font-semibold">{language === 'es' ? 'Calificación:' : 'Grade:'}</span> {language === 'es' ? 'Sobresaliente - Matrícula de Honor' : 'A+ With Honors'}
                        </p>
                        <p class="text-sm mt-1">
                            <span class="font-semibold">{language === 'es' ? 'Proyecto de Fin de Ciclo:' : 'Capstone Project:'}</span> {language === 'es' ? '9/10' : '9/10'}
                        </p>
                    </div>
                    <a href="http://www.ies-azarquiel.es/index.php/el-centro/oferta-educativa/ciclos-grado-superior" target="_blank" rel="noopener noreferrer" class="shrink-0" title="Ver plan de estudios">
                        <img src="./iesazarquiel.jpg" alt="IES Azarquiel" class="w-14 h-14 md:w-16 md:h-16 object-contain rounded-md p-1 transition-transform duration-300 hover:scale-105" />
                    </a>
                </div>
            </div>
        </section>
    )
}