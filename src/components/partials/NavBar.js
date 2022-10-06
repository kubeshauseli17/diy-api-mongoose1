import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/blogs'>All Blogs</Link>
                </li>

                <li>
                    <Link to='/blog/new'>Create Blog</Link>
                </li>
            </ul>
        </nav>
    )
}