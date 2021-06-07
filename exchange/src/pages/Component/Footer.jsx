import React from 'react'

export default function Footer() {
    return (
        <div>
            <section class="awesome-feature-area section_padding_0_50 clearfix footer-pro" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-feature">
                        <a class="navbar-brand" href="index.html"><img class="" src="img/logo.jpg" alt="logo"/></a>
                        <p>Coinquista is a licensed digital asset exchange and custodian. Buy, sell, and store digital assets in a regulated, secure, and compliant manner.</p>
                    </div>
						
					<div class="footer_social-media">
						<a href="#" target="_blank"><img class="footer_social-media-icon" src="img/facebook.svg" alt="Facebook icon" /></a>
						<a href="#" target="_blank"><img class="footer_social-media-icon" src="img/twitter.svg" alt="Twitter icon" /></a>
						<a href="#" target="_blank"><img class="footer_social-media-icon" src="img/linkedin.svg" alt="LinkedIn icon" /></a>
					</div>
					<p class="footer_copy-large">Let's talk: <br/><a class="footer_contact" href="mailto:hello@coinquista.com">hello@coinquista.com</a></p>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-feature footer_menu">
                        <h4 class="footer_heading">Menu</h4>
                        <ul class="footer_menu-list">
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Why coinquista</a></li>
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Trading view</a></li>
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Wallets</a></li>
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Security</a></li>
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Regulations</a></li>
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Contact us</a></li>
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Terms of use</a></li>
							<li class="footer_menu-list-item"><a class="footer_menu-list-item-link" href="" target="_blank">Privacy policy</a></li>
						</ul>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="single-feature footer_menu">
                        <h4 class="footer_heading">SUBMIT FOR UPDATES</h4>
                        <p class="footer__copy footer__description">Subscribe to get updates and notifications about our exchange and products.</p>
						<form class="newsletter__input-wrapper" method="POST">
							<div class="form-group">
								<label class="form-input__label" for="footerMailchimpEmail">
									<div class="form-input__input-wrapper form-input__input-wrapper--type-email">
										<input class="form-input__input newsletter__input" id="footerMailchimpEmail" type="email" name="EMAIL" placeholder="Email address" value=""/>
									</div>
								</label>
							</div>
							<button type="submit" class="g-button newsletter__input-submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"></button>
						</form>
						<div class="newsletter__checkbox-wrapper"><div class="checkbox-group">
						<label class="ant-checkbox-wrapper"><span class="ant-checkbox">
						<input name="newsletterCheckbox" id="newsletterCheckbox" type="checkbox" class="ant-checkbox-input" value=""/>
						<span class="ant-checkbox-inner"></span></span><span>
						<span class="checkbox-group__label-text newsletter__checkbox-label">* I consent to receiving marketing communications from Coinquista at the e-mail address provided above.</span></span></label></div></div>
					</div>
                </div>
            </div>			
			<hr class="footer__divider"/>
		
			<div class="footer__info-wrapper">
				<div class="footer__info">
					<p class="footer__copyright footer__copy--small">Copyright © 2018</p>
					<p class="footer__copy--small">Coinquista SA, ul. Grzybowska 87 00-844 Warsaw <br/>Capital 100 000 PLN, NIP: 5272870947</p>
				</div>
				<div>
					<span>Language: </span>
					<span class="footer__language" role="button" tabindex="0">English</span>
					<span class="footer__language" role="button" tabindex="0">Polish</span>
				</div>
			</div>
		</div>
    </section>
        </div>
    )
}
