import { lazy } from "react";

export const AsyncProfilePage = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        //@ts-ignore
        resolve(import('./ProfilePage'))
    }, 1500)
}))