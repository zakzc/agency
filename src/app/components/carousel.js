import React, { Component } from "react";
// assets
import Banner1 from "../assets/img/principal_banner_desktop.jpg";
import Banner2 from "../assets/img/principal_banner_desktop_02.jpg";
// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselText from "./carouselText";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "right",
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
      ],
    };

    // * Data
    const BannerData = [
      {
        reference: Banner1,
        alt: "Mortal Kombat",
        price: "299",
        cents: "99",
        bcg: "black",
        text: "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
      },
      {
        reference: Banner2,
        alt: "Red Redemption",
        price: "299",
        cents: "99",
        bcg: "darkred",
        text: "Em Red Redemption, John Marston, um antigo fora da lei cuja esposa e filho foram tomados como reféns, deve trabalhar como  pistoleiro contratado. Ele parte em uma jornada para levar membros de sua antiga gangue até a justiça.",
      },
    ];

    // * view
    const BannerImage = ({ imageRef, imageAlt, bcgColor }) => {
      return (
        <div style={{ backgroundColor: bcgColor }}>
          <img src={imageRef} alt={imageAlt} className="banner-image" />
        </div>
      );
    };

    const BannerView = ({
      imageRef,
      imageAlt,
      bcgColor,
      bannerText,
      itemPrice,
      itemCents,
    }) => {
      return (
        <div className="banner-view">
          <BannerImage
            imageRef={imageRef}
            imageAlt={imageAlt}
            bcgColor={bcgColor}
          />
          <CarouselText
            bannerHeader={imageAlt}
            bannerText={bannerText}
            itemPrice={itemPrice}
            itemCents={itemCents}
          />
        </div>
      );
    };

    ///
    return (
      <div className="carousel">
        <Slider {...settings}>
          {BannerData.map((b, index) => (
            <BannerView
              key={index}
              imageRef={b.reference}
              imageAlt={b.alt}
              bcgColor={b.bcg}
              bannerText={b.text}
              itemPrice={b.price}
              itemCents={b.cents}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
