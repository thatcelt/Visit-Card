import { SkillData } from "../../SkillEntity/model/types";

export const SKILLS: SkillData[] = [
    {
        title: 'React',
        icon: 'src/assets/react.svg',
        description: 'React — это декларативная, эффективная и гибкая JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет вам собирать сложный UI из маленьких изолированных кусочков кода, называемых «компонентами».'
    },
    {
        title: 'TailwindCSS',
        icon: 'src/assets/tailwind.svg',
        description: 'Tailwind CSS – это utility-first CSS фреймворк, который отличается от традиционных CSS фреймворков вроде Bootstrap или Foundation тем, что вместо предопределенных компонентов предлагает набор utility-классов, позволяющих стилизовать элементы прямо в HTML.'
    },
    {
        title: 'Vite',
        icon: 'src/assets/vite.svg',
        description: 'Vite - это инструмент сборки, который значительно улучшает опыт разработки фронтенда. С помощью Vite можно создать среду разработки для таких фреймворков, как Vue и React. Даже этот сайт создан при помощи Vite :)'
    },
    {
        title: 'TypeScript',
        icon: 'src/assets/typescript.svg',
        description: 'TypeScript — это строго типизированный язык программирования, построенный на JavaScript. Разработчики добавили в него дополнительные возможности, такие как статическая типизация, классы и модули, чтобы создавать более надежные и поддерживаемые программы.'
    }
]