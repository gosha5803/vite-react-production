import { FC } from "react";
import { NavLink } from "react-router-dom";

const AboutPage: FC = () => {
    return(
        <>
            <h1>
                About page
            </h1>
            <NavLink
                to={'/'}
            >
                Main
            </NavLink>
        </>
    )
}

export default AboutPage