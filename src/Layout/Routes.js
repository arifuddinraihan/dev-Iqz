import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Cards from "../Components/HomePage.js/Cards";
import HeroSection from "../Components/HomePage.js/HeroSection";
import StatPage from "../Components/StatPage/StatPage";
import Root from "./Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: () => fetch (`https://openapi.programming-hero.com/api/quiz`),
        children: [
            { path: '/', element: <HeroSection></HeroSection> },
            { path: '/home', element: <HeroSection></HeroSection> },
            { path: '/stat', element: <StatPage></StatPage> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/topic', element: <Cards></Cards> },
        ]
    },

])