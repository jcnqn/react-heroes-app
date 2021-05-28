import React, {useContext} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../../auth/AuthContext';
import {types} from '../../types/types';

export const Navbar = () => {

    const {user: {name}, dispatch} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        });
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Heroes
                </Link>


                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="d-flex mr-3">
                    <ul className="navbar-nav mr-3">

                    <span className="nav-item nav-link text-info">
                        {name}
                    </span>

                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>


            </div>

        </nav>
    )
}
