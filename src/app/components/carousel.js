import React, { Component } from "react";
// assets
import Banner1 from "../assets/img/principal_banner_desktop.jpg";
import Banner2 from "../assets/img/principal_banner_desktop_02.jpg";
// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "green",
//       }}
//       onClick={onClick}
//     />
//   );
// }

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "right",
      dots: false,
      infinite: true,
      speed: 150,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
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
    // * data
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
          <img src={imageRef} alt={imageAlt} style={{ width: "80%" }} />
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
          <div className="banner-text">
            <h1>{imageAlt}</h1>
            <h2 className="price-stamp">
              <span className="sub">{itemPrice}</span>
              <span className="sup">,{itemCents}</span>
            </h2>
            <div>{bannerText}</div>
          </div>
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
