import { FC, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRouterConfig, PrivateRouterConfig } from "shared/config/RouterConfig";

export const AppRouter: FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    return(
        <Suspense
            fallback={'Loading...'}
        >
            <Routes>
                {(isAuth ? PrivateRouterConfig : PublicRouterConfig).map(({ path, element }) => 
                        <Route
                        key={path}
                        path={path}
                        element={
                            <div
                                className="page-wrapper"
                            >
                                {element}
                            </div>
                        }
                        >
                            
                    
                    </Route>
                )}
            </Routes>
        </Suspense>
    )
}