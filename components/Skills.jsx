import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { languages, web, dataAI, databases, systems, tools } from '../data/skillsData';

const groups = [
    { id: 'languages', title_es: 'Lenguajes', title_en: 'Languages', skills: languages },
    { id: 'web', title_es: 'Web y APIs', title_en: 'Web & APIs', skills: web },
    { id: 'dataAI', title_es: 'Datos e IA', title_en: 'Data & AI', skills: dataAI },
    { id: 'databases', title_es: 'Bases de datos', title_en: 'Databases', skills: databases },
    { id: 'systems', title_es: 'Sistemas y DevOps', title_en: 'Systems & DevOps', skills: systems },
    { id: 'tools', title_es: 'Herramientas', title_en: 'Tools', skills: tools }
];

function SkillIcon({ item }) {
    if (item.img) {
        return <img src={item.img} alt="" className="w-9 h-9 lg:w-12 lg:h-12 object-contain shrink-0" />;
    }
    if (item.fa) {
        return <FontAwesomeIcon icon={item.fa} className="text-4xl lg:text-5xl shrink-0" />;
    }
    return <i className={`${item.icon} text-4xl lg:text-5xl shrink-0`}></i>;
}

export default function Skills({ language }) {
    const [openGroups, setOpenGroups] = useState({});
    const isEs = language === 'es';

    const toggle = (id) => setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));

    const renderDropdown = (group) => {
        const isOpen = !!openGroups[group.id];

        return (
            <div className="relative mt-4" key={group.id}>
                <button
                    onClick={() => toggle(group.id)}
                    aria-expanded={isOpen}
                    className={`flex justify-between items-center group relative border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark w-full max-w-[968px] text-start font-light py-4 px-4 rounded-lg text-md transition-all duration-300 ease-in-out hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 cursor-pointer
                        ${isOpen ? 'rounded-bl-none rounded-br-none border-b-0 bg-black/10 dark:bg-white/10' : 'rounded-lg'}`}
                >
                    <span className="lg:text-lg">{isEs ? group.title_es : group.title_en}</span>
                    <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                    className={`flex flex-col rounded-lg rounded-tl-none rounded-tr-none p-3 shadow-md origin-top duration-200 w-full max-w-[968px] border border-t-0 border-black/20 dark:border-gray-200/20 ${
                        isOpen ? 'block' : 'hidden'
                    }`}
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                        {group.skills.map((item) => (
                            <div
                                key={item.name}
                                className="rounded-lg border border-black/20 dark:border-gray-200/20 p-4 hover:bg-black/10 dark:hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:border-black/20 dark:hover:border-gray-300/20 flex gap-4"
                            >
                                <SkillIcon item={item} />
                                <div className="space-y-1">
                                    <h4 className="text-l sm:text-l lg:text-xl font-semibold text-text-primary dark:text-text-primary-dark">{item.name}</h4>
                                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                                        {(isEs ? item.category_es : item.category_en).map((category) => (
                                            <span
                                                key={category}
                                                className="bg-back border border-black/20 dark:border-gray-200/20 text-text-primary/80 dark:text-text-primary-dark text-xs sm:text-sm lg:text-xs font-light sm:font-normal lg:font-medium px-2 py-0.5 rounded-lg"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="px-5 py-5 pt-20">
            <div>
                <h2 className="font-semibold text-3xl text-text-primary dark:text-text-primary-dark lg:text-4xl">
                    {isEs ? 'Habilidades' : 'Skills'}
                </h2>

                {groups.map(renderDropdown)}
            </div>
        </section>
    );
}