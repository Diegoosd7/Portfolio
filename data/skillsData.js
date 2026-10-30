import { faRobot, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const liferayIcon = './liferay.png';
const huggingfaceIcon = './huggingface.svg';

export const languages = [
    { icon: 'devicon-python-plain colored', name: "Python", category_es: ["Lenguaje"], category_en: ["Language"] },
    { icon: 'devicon-java-plain colored', name: "Java", category_es: ["Lenguaje"], category_en: ["Language"] },
    { icon: 'devicon-javascript-plain colored', name: "JavaScript", category_es: ["Lenguaje"], category_en: ["Language"] },
    { icon: 'devicon-c-plain colored', name: "C", category_es: ["Lenguaje", "Bajo nivel"], category_en: ["Language", "Low-level"] },
    { icon: 'devicon-cplusplus-plain colored', name: "C++", category_es: ["Lenguaje", "Bajo nivel"], category_en: ["Language", "Low-level"] },
    { icon: 'devicon-go-original-wordmark colored', name: "Go", category_es: ["Lenguaje"], category_en: ["Language"] },
    { icon: 'devicon-r-plain colored', name: "R", category_es: ["Lenguaje", "Análisis"], category_en: ["Language", "Analysis"] }
];

export const web = [
    { icon: 'devicon-react-original colored', name: "React", category_es: ["Frontend"], category_en: ["Frontend"] },
    { icon: 'devicon-angularjs-plain colored', name: "Angular", category_es: ["Frontend"], category_en: ["Frontend"] },
    { icon: 'devicon-html5-plain colored', name: "HTML", category_es: ["Frontend"], category_en: ["Frontend"] },
    { icon: 'devicon-css3-plain colored', name: "CSS", category_es: ["Frontend"], category_en: ["Frontend"] },
    { icon: 'devicon-tailwindcss-original colored', name: "Tailwind & Bootstrap", category_es: ["Frontend", "CSS"], category_en: ["Frontend", "CSS"] },
    { icon: 'devicon-nodejs-plain colored', name: "Node.js", category_es: ["Backend"], category_en: ["Backend"] },
    { icon: 'devicon-fastapi-plain colored', name: "FastAPI & Flask", category_es: ["Backend", "API"], category_en: ["Backend", "API"] },
    { img: liferayIcon, name: "Liferay", category_es: ["CMS", "Backend"], category_en: ["CMS", "Backend"] }
];

export const dataAI = [
    { icon: 'devicon-pandas-plain', name: "pandas, NumPy & SciPy", category_es: ["Análisis"], category_en: ["Analysis"] },
    { icon: 'devicon-matplotlib-plain colored', name: "Matplotlib & Seaborn", category_es: ["Visualización"], category_en: ["Visualization"] },
    { icon: 'devicon-scikitlearn-plain colored', name: "scikit-learn & XGBoost", category_es: ["Machine Learning"], category_en: ["Machine Learning"] },
    { icon: 'devicon-tensorflow-original colored', name: "TensorFlow & PyTorch", category_es: ["Deep Learning"], category_en: ["Deep Learning"] },
    { img: huggingfaceIcon, name: "Hugging Face", category_es: ["Deep Learning", "NLP"], category_en: ["Deep Learning", "NLP"] },
    { fa: faRobot, name: "AI agents", category_es: ["LLM", "Agentes"], category_en: ["LLM", "Agents"] }
];

export const databases = [
    { icon: 'devicon-postgresql-plain colored', name: "PostgreSQL", category_es: ["BBDD Relacional"], category_en: ["Relational DB"] },
    { icon: 'devicon-mongodb-plain colored', name: "MongoDB", category_es: ["BBDD NoSQL"], category_en: ["NoSQL DB"] },
    { icon: 'devicon-cassandra-plain colored', name: "Cassandra", category_es: ["BBDD NoSQL"], category_en: ["NoSQL DB"] },
    { icon: 'devicon-firebase-plain colored', name: "Firebase", category_es: ["Cloud BBDD"], category_en: ["Cloud DB"] }
];

export const systems = [
    { icon: 'devicon-linux-plain', name: "Linux", category_es: ["SO"], category_en: ["OS"] },
    { icon: 'devicon-docker-plain colored', name: "Docker", category_es: ["DevOps"], category_en: ["DevOps"] },
    { icon: 'devicon-kubernetes-plain colored', name: "Kubernetes", category_es: ["DevOps"], category_en: ["DevOps"] },
    { icon: 'devicon-helm-original', name: "Helm", category_es: ["DevOps"], category_en: ["DevOps"] },
    { icon: 'devicon-githubactions-plain colored', name: "CI/CD", category_es: ["DevOps", "Automatización"], category_en: ["DevOps", "Automation"] },
    { icon: 'devicon-azure-plain colored', name: "Azure", category_es: ["Cloud"], category_en: ["Cloud"] },
];

export const tools = [
    { icon: 'devicon-git-plain colored', name: "Git & GitHub", category_es: ["Control de versiones"], category_en: ["Version control"] },
    { fa: faCodeBranch, name: "Gerrit", category_es: ["Revisión de código"], category_en: ["Code review"] },
    { icon: 'devicon-jira-plain colored', name: "Jira", category_es: ["Gestión"], category_en: ["Management"] },
    { icon: 'devicon-sonarqube-plain colored', name: "SonarQube", category_es: ["Calidad"], category_en: ["Quality"] },
    { icon: 'devicon-figma-plain colored', name: "Figma", category_es: ["Diseño"], category_en: ["Design"] },
    { icon: 'devicon-latex-original', name: "LaTeX", category_es: ["Documentación"], category_en: ["Documentation"] }
];