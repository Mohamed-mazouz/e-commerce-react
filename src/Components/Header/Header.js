import React from 'react';
import './Header.css';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Header = () => {
    return (
        <div className="Header">

            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" >SELL. </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                        <ul class=" navbar-nav me-auto mb-2 mb-lg-0 mx-auto fs-5" style={{ color: "gray" }}>
                            <li class="nav-item mx-3">
                                <a class="nav-link " aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="products.html">SHOP</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="singleproduct.html">CONTACT</a>
                            </li>

                        </ul>
                        <div class="mx-3">

                            <a href="#">
                                <SearchIcon style={{ margin: "10px" }} /></a>
                            <a href="#" >
                                <AccountCircleIcon style={{ margin: "10px" }} /></a>
                            <a href="#" >
                                <ShoppingCartIcon style={{ margin: "10px" }} /></a>
                        </div>

                    </div>

                </div>

            </nav>


            {/* Slider */}
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner  ">
                    <div class="carousel-item active ">
                        <img src={slider2} class="d-block w-100" alt="..." />
                        
                        <div class="carousel-caption d-xl-block d-lg-block  d-md-block mb-5 ">
                            <h5 className="mb-5 display-2 font-weight-bold text-serif">First slide label</h5>
                            <p className="text-uppercase font-weight-light mb-4 letter-spacing-5">Some representative placeholder content for the first slide.</p>
                            <p> <a class="btn btn-light" href="category.html">View collection</a></p>
                        </div>
                    
                    </div>
                    <div class="carousel-item">
                        <img src={slider1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption  d-lg-block d-md-block mb-5">
                            <h5 className="mb-5 display-2 font-weight-bold text-serif">Second slide label</h5>
                            <p className="text-uppercase font-weight-light mb-4 letter-spacing-5">Some representative placeholder content for the second slide.</p>
                            <p> <a class="btn btn-light" href="category.html">View collection</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slider3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption  d-lg-block d-md-block mb-5">
                            <h5 className="mb-5 display-2 font-weight-bold text-serif">Third slide label</h5>
                            <p className="text-uppercase font-weight-light mb-4 letter-spacing-5">Some representative placeholder content for the third slide.</p>
                            <p> <a class="btn btn-light" href="category.html">View collection</a></p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}

export default Header
