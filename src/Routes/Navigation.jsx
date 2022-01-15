import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from "../Pages/Home";
import Posts from '../Components/Posts';
import Post from "../Components/Post";
import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="posts" element={ <Posts />  } />
                    <Route path="posts/:postId" element={ <Post />  } />
                    <Route path="users" element={ <h1>Users Page</h1> } />
                    <Route path="home" element={ <Home /> } />

                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default Navigation;