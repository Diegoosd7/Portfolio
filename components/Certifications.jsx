export default function Certifications({ language }) {
    const certifications = [
        {
            img: "./google.webp",
            title_es: "Introducción a los principios de seguridad en la computación en la nube",
            title_en: "Introduction to Security Principles in Cloud Computing",
            issuer: "Google Cloud",
            url: "https://www.skills.google/public_profiles/0ec55830-2496-45ee-8cae-12d2d75bd881/badges/23031254?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
            img: "./microsoft.jpg",
            title_es: "Curso de IA Responsable y Prompt Engineering",
            title_en: "Responsible AI & Prompt Engineering Course",
            issuer: "Microsoft",
            url: "https://learn.microsoft.com/es-es/users/diegosnchez-8639/achievements"
        },
        {
            img: "./aprendea.png",
            title_es: "Ciberseguridad avanzada en entornos OT",
            title_en: "Advanced Cybersecurity in OT Environments",
            issuer: "Aprendea (Credencial: MTLFMBbvxm)",
            url: "https://hdnfmad.grupohedima.com/mod/customcert/verify_certificate.php"
        },
        {
            img: "./cambridge.png",
            title_es: "Certificado Cambridge English: First (B2)",
            title_en: "Cambridge English: First Certificate (B2)",
            issuer: "Cambridge Assessment English",
            url: "#"
        },
        {
            img: "./openwebinars.jpg",
            title_es: "Firebase y Angular",
            title_en: "Firebase and Angular",
            issuer: "OpenWebinars",
            url: "https://openwebinars.net/cert/6NzE5"
        },
        {
            img: "./openwebinars.jpg",
            title_es: "Arquitectura Web para SEO y Fundamentos",
            title_en: "Web Architecture for SEO and Fundamentals",
            issuer: "OpenWebinars",
            url: "https://openwebinars.net/cert/qJ356"
        },
        {
            img: "./openwebinars.jpg",
            title_es: "Curso de React",
            title_en: "React Course",
            issuer: "OpenWebinars",
            url: "https://openwebinars.net/cert/PBN7X"
        },
        {
            img: "./openwebinars.jpg",
            title_es: "Curso de JavaScript",
            title_en: "JavaScript Course",
            issuer: "OpenWebinars",
            url: "https://openwebinars.net/cert/PLjMe"
        },
        {
            img: "./openwebinars.jpg",
            title_es: "Curso de Figma",
            title_en: "Figma Course",
            issuer: "OpenWebinars",
            url: "https://openwebinars.net/cert/RMKKM"
        },
        {
            img: "./openwebinars.jpg",
            title_es: "Curso de Git",
            title_en: "Git Course",
            issuer: "OpenWebinars",
            url: "https://openwebinars.net/cert/y2ANQ"
        },
        {
            img: "./openwebinars.jpg",
            title_es: "Responsive Web Design",
            title_en: "Responsive Web Design",
            issuer: "OpenWebinars",
            url: "https://openwebinars.net/cert/zzz5Z"
        }
    ]

return(
        <section class="px-5 py-5">
            <h3 class="font-semibold text-2xl text-text-primary dark:text-text-primary-dark mb-4">
                {language === 'es' ? 'Certificaciones y Cursos' : 'Certifications & Courses'}
            </h3>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => {
                    return(
                        <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer">
                            <div class="flex items-center gap-5 rounded-lg border border-black/20 dark:border-gray-200/20 p-3 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20">
                                <img class="h-10 w-auto rounded-lg object-contain" src={cert.img} alt={cert.issuer} />
                                <div>
                                    <h4 class="font-medium text-md text-text-primary dark:text-text-primary-dark leading-tight">
                                        {language === 'es' ? cert.title_es : cert.title_en}
                                    </h4>
                                    <p class="font-extralight text-xs text-text-secondary/70 dark:text-text-secondary-dark/70 mt-1">{cert.issuer}</p>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}    