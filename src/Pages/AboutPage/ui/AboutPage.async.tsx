import { lazy } from "react";

export const AsyncAboutPage = lazy(() => 
    new Promise(resolve => {
        setTimeout(() => {
            //@ts-ignore
            resolve(import('./AboutPage'))
        }, 1600)
    })
)