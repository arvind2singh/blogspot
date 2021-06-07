import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PriceListingItem from './PriceListingItem';

export default function WrapperProdd() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        
        <div>
            <div class="wrapper-prodd">
                        <Slider {...settings}>
      <div>
      <PriceListingItem />
      </div>
      <div>
      <PriceListingItem />
      </div>
      <div>
      <PriceListingItem />
      </div>
      <div>
      <PriceListingItem />
      </div>
      <div>
      <PriceListingItem />
      </div>
      <div>
      <PriceListingItem />
      </div>
    </Slider>
    </div>
        </div>
    )
}
