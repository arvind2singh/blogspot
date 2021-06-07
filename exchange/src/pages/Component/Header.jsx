import React from 'react'

export default function Header() {
    return (
        <div>
            <header class="header_area animated">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-12 col-lg-9">
                    <div class="menu_area">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="index.html"><img class="" src="img/logo.jpg" alt="logo" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse" id="ca-navbar">
                                <ul class="navbar-nav ml-auto" id="nav">
                                    <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="help.html">Help</a></li>
									<li class="nav-item"><a class="nav-link" href="privacy-policy.html">Privacy Policy</a></li>
									<li class="nav-item"><a class="nav-link" href="terms-conditions.html">Terms & Conditions</a></li>
                                </ul>
                                <div class="sing-up-button d-lg-none">
                                    <a href="#">Login</a>
									<a href="#">Register</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="sing-up-button d-none d-lg-block">
                        <a href="#">Login</a>
						<a href="#" class="rgt-btn">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
        </div>
    )
}
