import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SendIcon from '@material-ui/icons/Send';
import './Footer.css'

const Footer = () => {
    return (

        <div className="footer">
            <div className="Footer1">
                <div className="footer_item m-5">

                    <div className="footer_item_content ">
                        <div className="footer_icon mx-3">
                            <LocalShippingIcon />
                        </div>
                        <div>
                            <h6>FREE SHOPPING RETURN</h6>
                            <p>Free shopping over $300</p>
                        </div>
                    </div>

                    <div className="footer_item_content">
                        <div className="footer_icon mx-3">
                            <MonetizationOnIcon />
                        </div>
                        <div>
                            <h6>FREE SHOPPING RETURN</h6>
                            <p>Free shopping over $300</p>
                        </div>
                    </div>

                    <div className="footer_item_content">
                        <div className="footer_icon mx-3">
                            <CallIcon />
                        </div>
                        <div>
                            <h6>FREE SHOPPING RETURN</h6>
                            <p>Free shopping over $300</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer2">
                <div className="footer2_information">
                    <div className="footer2_bloc">
                        <h6>SELL.</h6>
                        <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="footer2_icon py-3">
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <PinterestIcon />
                        </div>
                    </div>

                    <div className="footer2_bloc">
                        <h6>SHOP</h6>
                        <ul>
                            <li>For Women</li>
                            <li>For Men</li>
                            <li>Stores</li>
                            <li>Our Blog</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div className="footer2_bloc">
                        <h6>COMPANY</h6>
                        <ul>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Wishlist</li>
                            <li>Our Product</li>
                            <li>Checkouts</li>
                        </ul>
                    </div>
                    <div className="footer2_bloc">
                        <h6>DAILY OFFERTS & DISCOUNTS</h6>
                        <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto temporibus</p>

                        <div class="input-group mb-3 py-3">
                            <input type="text" class="form-control bg-transparent border" placeholder="Your Email Adress" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <span class="input-group-text" id="basic-addon2"><SendIcon/></span>
                        </div>



                        </div>
                    </div>
                </div>

            </div>


    )
}

export default Footer
