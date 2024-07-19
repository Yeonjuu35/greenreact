import { Link } from 'react-router-dom'

function NavItem({link, linktext}) {
    return (
        <li>
            <Link to={link}>{linktext}</Link>
        </li>
    )
}

export default NavItem
