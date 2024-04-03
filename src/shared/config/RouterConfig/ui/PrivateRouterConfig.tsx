import { ProfilePage } from "Pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export enum PrivateAppRoutes {
    PROFILE = 'profile',
    NOT_EXIST = "not_exist"
}

export const PrivateRoutePaths: Record<PrivateAppRoutes, string> = {
    [PrivateAppRoutes.PROFILE]: 'profile',
    [PrivateAppRoutes.NOT_EXIST]: '*'
}

export const PrivateRouterConfig: RouteProps[] = [
    // [PrivateAppRoutes.PROFILE]:
    {
        path: PrivateRoutePaths.profile,
        element: <ProfilePage/>
    },
    // [PrivateAppRoutes.NOT_EXIST]: 
    {
        path: PrivateRoutePaths.not_exist,
        element: <ProfilePage/>
    }
    
]