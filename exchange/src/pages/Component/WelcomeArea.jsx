import React from 'react'

export default function WelcomeArea() {
    return (
        <div>
              <section class="wellcome_area clearfix" id="home">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 col-md">
                    <div class="wellcome-heading">
						<p class="mg-1">SECURITY. LIQUIDITY. TRUST</p> 
						<h2>Buy and Sell <br />Cryptocurrencies.<br />Fast and Secure</h2>
                        <p>Coinquista S.A. is registered with the Polish Financial Supervision<br /> Authority, as a small payment institution, license number: MIP13/2019</p>
                    </div>
                    <div class="get-start-area">
                        <a href="#" class="g-button-pro">Try now</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome-thumb wow fadeInDown" data-wow-delay="0.5s">
            <img src="img/header-bg.png" alt="" />
        </div>
    </section>
        </div>
    )
}
