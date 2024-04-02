import { FC } from "react";
// import { PhotosSlider } from "../../../widgets/PhotosSlider";
// import { MainPageLayout } from "../../../widgets/Layouts/MainPageLayout/MainPageLayout";
import { NavLink } from "react-router-dom";

const MainPage: FC = () => {
    return(
        <>
         {/* <MainPageLayout> */}
            {/* <PhotosSlider/> */}
            {/* <button> */}
                {/* О проекте */}
                <h1>Main Page</h1>
                <NavLink to={'/about'}>О проекте</NavLink>
            {/* </button> */}
         {/* </MainPageLayout> */}
        </>
    )
}

export default MainPage