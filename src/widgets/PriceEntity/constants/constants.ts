import { PriceEntityProps } from "../model/types";

export const PRICINGS: PriceEntityProps[] = [
    {
        title: 'Разработка Telegram-бота',
        description: 'Разработка ботов любой сложности для любых проектов',
        price: '1000',
        badges: ['Python', 'Aiogram']
    },
    {
        title: 'Frontend-разработка',
        description: 'Разработка клиентской части сайта',
        price: '2000',
        badges: ['React', 'TypeScript']
    },
    {
        title: 'Backend-разработка',
        description: 'Разработка серверной части проекта, REST API',
        price: '1000',
        badges: ['Fastify', 'TypeScript']
    },
    {
        title: 'Fullstack-разработка',
        description: 'Разработка серверной, и клиентской части проекта',
        price: '3000',
        badges: ['React', 'Fastify']
    }
]

export const TELEGRAM_LINK = 'https://t.me/celt_is_god'