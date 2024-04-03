import { AboutPage } from "Pages/AboutPage"
import { MainPage } from "Pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum PublicAppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_EXIST = "not_exist"
}

export const RoutePaths: Record<PublicAppRoutes, string> = {
    [PublicAppRoutes.MAIN]: '/',
    [PublicAppRoutes.ABOUT]: '/about',
    [PublicAppRoutes.NOT_EXIST]: '*'
    
}

export const PublicRouterConfig: RouteProps[] = [
    // [PublicAppRoutes.MAIN]: 
    {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    // [PublicAppRoutes.ABOUT]:
    {
        path: RoutePaths.about,
        element: <AboutPage/>
    },
    
    // [PublicAppRoutes.NOT_EXIST]:
    {
        path: RoutePaths.not_exist,
        element: <MainPage/>
    }
]