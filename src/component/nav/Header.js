import logo from "../img/seo/logo.png"
import NavItem from "./NavItem"
import { Icon1, Icon2, Icon3 } from "../common/Style"

function Header() {
    return (
        <header>
            <h1><img src={logo} alt="그린피스로고" /></h1>
            <ul>
                <NavItem link="/introduce" linktext="소개" />
                <NavItem link="/activity" linktext="활동" />
                <NavItem link="/campaign" linktext="캠페인" />
                <NavItem link="/participation" linktext="참여" />
            </ul>
            <ul>

            </ul>
        </header>
    )
}
import { formToJSON } from "axios"

export default Header
