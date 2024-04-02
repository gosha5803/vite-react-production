import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from '../Pages/MainPage/index'
import cls from  './styles/main.css'
import { AboutPage } from "../Pages/AboutPage/index";

export const AppRouter: FC = () => {
    return(
        <Suspense
            fallback={'Loading...'}
        >
            <Routes>
                <Route path="/" Component={MainPage}/>
                <Route path="/about" Component={AboutPage}/>
            </Routes>
        </Suspense>
    )
}