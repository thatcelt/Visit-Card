import { SkillData } from "../../SkillEntity/model/types";

export const SKILLS: SkillData[] = [
    {
        title: 'React',
        icon: 'src/assets/react.svg',
        description: 'React — это декларативная, эффективная и гибкая JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет вам собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами».',
        link: 'https://react.dev'
    },
    {
        title: 'TailwindCSS',
        icon: 'src/assets/tailwind.svg',
        description: 'Tailwind CSS – это utility-first CSS фреймворк, который отличается от традиционных CSS фреймворков вроде Bootstrap или Foundation тем, что вместо предопределенных компонентов предлагает набор utility-классов, позволяющих стилизовать элементы прямо в HTML.',
        link: 'https://tailwindcss.com/'
    },
    {
        title: 'Vite',
        icon: 'src/assets/vite.svg',
        description: 'Vite - это инструмент сборки, который значительно улучшает опыт разработки фронтенда. С помощью Vite можно создать среду разработки для таких фреймворков, как Vue и React. Даже этот сайт создан при помощи Vite :)',
        link: 'https://vitejs.dev/'
    },
    {
        title: 'TypeScript',
        icon: 'src/assets/typescript.svg',
        description: 'TypeScript — это строго типизированный язык программирования, построенный на JavaScript. Разработчики добавили в него дополнительные возможности, такие как статическая типизация, классы и модули, чтобы создавать более надежные и поддерживаемые программы.',
        link: 'https://www.typescriptlang.org/'
    },
    {
        title: 'NodeJS',
        icon: 'src/assets/nodejs.svg',
        description: 'Node.js (Node) — это платформа с открытым исходным кодом для работы с языком JavaScript, построенная на движке Chrome V8. Она позволяет писать серверный код для веб-приложений и динамических веб-страниц, а также программ командной строки.',
        link: 'https://nodejs.org/en'
    },
    {
        title: 'Fastify',
        icon: 'src/assets/fastify.png',
        description: 'Fastify — это один из самых быстрых фреймворков для NodeJS, ориентированный на обработку максимального количества запросов без ущерба безопасности и удобству разработки.',
        link: 'https://www.fastify.io/'
    },
    {
        title: 'Python',
        icon: 'src/assets/python.svg',
        description: 'Python — это язык программирования, который широко используется в интернет-приложениях, разработке программного обеспечения, науке о данных и машинном обучении',
        link: 'https://www.python.org/'
    },
    {
        title: 'GraphQL',
        icon: 'src/assets/graphql.svg',
        description: 'GraphQL — это язык запросов и серверная среда для API с открытым исходным кодом. Он появился в Facebook в 2012 году и был разработан для упрощения управления конечными точками для API на основе REST.',
        link: 'https://graphql.org/'
    }
]