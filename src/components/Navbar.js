import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    getInitialState
    render() {
        return (
            <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <Link class="navbar-brand" to="/">Mom's Handmade</Link>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">HOME <span class="sr-only">(current)</span></Link>
                                </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/catalogue"> CATALOGUE </Link>
                                </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about"> CONTACT </Link>
                                </li>
                        
                            </ul>
                        <form class="form-inline mt-2 mt-md-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar