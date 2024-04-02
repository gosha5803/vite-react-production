import { lazy } from "react";

export const AsyncMainPage = lazy(() => new Promise(resolve => {
    setTimeout(() => {
        //@ts-ignore
        resolve(import('./MainPage'))
    }, 1500)
}))