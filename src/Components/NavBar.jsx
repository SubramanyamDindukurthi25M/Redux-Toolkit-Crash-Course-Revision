import {Link,Routes,Route} from 'react-router-dom'
import {Home} from '../pages/Home'
import {Employees} from '../pages/Employees'
import {Counter} from '../pages/Counter'
import {Users} from '../pages/Users'

export const NavBar = () => {
    return (
        <>
            <nav
                className="navbar navbar-dark bg-dark navbar-expand-sm"
            >
                <div className="container">
                    <Link
                        className="navbar-brand"
                        to={'/'}
                    >
                        Redux-Toolkit

                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={'/employees'}
                                >
                                    Employees 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={'/counter'}
                                >
                                    Counter
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to={'/users'}
                                >
                                    Users
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/employees'
                    element={<Employees/>}
                />
                <Route
                    path='/counter'
                    element={<Counter/>}
                />
                <Route
                    path='/users'
                    element={<Users/>}
                />
            </Routes>
        </>
    )
}