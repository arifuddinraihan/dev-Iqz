import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import HeroSection from "../Components/HomePage.js/HeroSection";
import Quiz from "../Components/Quiz/Quiz";
import StatPage from "../Components/StatPage/StatPage";
import Root from "./Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
        children: [
            { path: '/', element: <HeroSection></HeroSection> },
            { path: '/stat', element: <StatPage></StatPage> },
            {
                path: '/blog',
                loader: () => fetch(`data.json`),
                element: <Blog></Blog>
            },
            {
                path: 'quiz/:id',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quiz></Quiz>
            },
            {
                path: 'home/quiz/:id',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quiz></Quiz>
            }
        ]
    }
])