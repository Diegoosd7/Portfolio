export const projects = [
    {
        img : "./ajtoolkit.jpeg",
        name_es : "AJToolkit",
        name_en : "AJToolkit",
        subtitle_es : "Detección de audio jailbreaks mediante linear probes en LALM",
        subtitle_en : "Audio Jailbreak Detection via Linear Probes in LALMs",
        description_es : "Toolkit para detectar ataques de audio jailbreak en modelos de IA. Extrae activaciones internas (Whisper, Qwen2, HuBERT) y entrena sondas lineales sobre un dataset propio de 30.000 audios sintéticos y perturbados.",
        description_en : "Toolkit for detecting audio jailbreak attacks in AI models. It extracts internal activations (Whisper, Qwen2, HuBERT) and trains linear probes on a custom dataset of 30,000 synthetic and perturbed audios.",
        categories : [
            { icon : "devicon-python-plain colored", name : "Python" },
            { icon : "devicon-pytorch-original colored", name : "PyTorch" },
            { icon : "devicon-numpy-plain colored", name : "NumPy" },
            { icon : "devicon-pandas-plain colored", name : "Pandas" }
        ],
        github : "https://github.com/Diegoosd7/AJToolkit",
        demo : "", 
        video : ""
    },
    {
    img : "./newsradar.jpeg",
    name_es : "NewsRadar",
    name_en : "NewsRadar",
    subtitle_es : "Proyecto final de DevOps",
    subtitle_en : "DevOps Final Project",
    description_es : "Sistema de monitorización de noticias a partir de canales RSS de medios y fuentes oficiales. Permite definir alertas por palabras clave, clasificar noticias por categorías IPTC y notificar a los usuarios.",
    description_en : "News monitoring system based on RSS feeds from media outlets and official sources. It lets users define keyword alerts, classify news by IPTC categories and send notifications.",
    categories : [
        { icon : "devicon-python-plain colored", name : "Python" },
        { icon : "devicon-fastapi-plain colored", name : "FastAPI" },
        { icon : "devicon-sqlalchemy-original colored", name : "SQLAlchemy" },
        { icon : "devicon-sqlite-plain colored", name : "SQLite" },
        { icon : "devicon-docker-plain colored", name : "Docker" },
        { icon : "devicon-githubactions-plain colored", name : "GitHub Actions" },
        { icon : "devicon-pytest-plain colored", name : "Pytest" },
        { icon : "devicon-sonarqube-plain colored", name : "SonarQube" },
        { icon : "devicon-vuejs-plain colored", name : "Vue 3" },
        { icon : "devicon-typescript-plain colored", name : "TypeScript" }
    ],
    github : "https://github.com/Diegoosd7/Newsradar",
    demo : "",
    video : ""
},
]