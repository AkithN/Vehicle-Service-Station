import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./CustomerReviews.css";
import review1 from "../../assets/logo1.png";
import review2 from "../../assets/logo2.png";
import review3 from "../../assets/logo3.png";
import review4 from "../../assets/logo4.png";
import review5 from "../../assets/logo5.png";
import review6 from "../../assets/logo6.png";
import review7 from "../../assets/logo7.png";
import review8 from "../../assets/logo8.png";
import review9 from "../../assets/logo9.png";
import review10 from "../../assets/logo10.png";
import review11 from "../../assets/logo11.png";
import review12 from "../../assets/logo12.png";
import brand1 from "../../assets/icon13.png";
import brand2 from "../../assets/icon14.png";
import brand3 from "../../assets/icon15.png";
import brand4 from "../../assets/icon16.png";
import brand5 from "../../assets/icon17.png";
import brand6 from "../../assets/icon18.png";
import brand7 from "../../assets/icon19.png";
import brand8 from "../../assets/icon20.png";
import brand9 from "../../assets/icon21.png";
import brand10 from "../../assets/icon22.png";
import brand11 from "../../assets/icon23.png";
import brand12 from "../../assets/icon24.png";
import brand13 from "../../assets/icon25.png";
import brand14 from "../../assets/icon26.png";
import brand15 from "../../assets/icon27.png";
import brand16 from "../../assets/icon28.png";
import brand17 from "../../assets/icon29.png";
import brand18 from "../../assets/icon30.png";
import brand19 from "../../assets/icon31.png";
import brand20 from "../../assets/icon32.png";
import brand21 from "../../assets/icon33.png";
import brand22 from "../../assets/icon34.png";
import image1 from "../../assets/expert-1.jpg";
import image2 from "../../assets/expert-2.jpg";
import image3 from "../../assets/expert-3.jpg";
import image4 from "../../assets/expert-4.jpg";
import image5 from "../../assets/expert-5.jpg";
import image6 from "../../assets/expert-6.png";
import { Rate } from "antd";

const userReviews = [
  {
    name: "John Doe",
    who: "CEO of XYZ",
    description: "Great service, highly recommended!",
    image: image1,
    rating: 5,
  },
  {
    name: "Jane Smith",
    who: "CTO of ABC",
    description: "Amazing experience with top-notch support.",
    image: image2,
    rating: 4.5,
  },
  {
    name: "Michael Johnson",
    who: "Manager at DEF",
    description: "Exceptional quality and timely delivery. Couldn't be happier!",
    image: image3,
    rating: 3,
  },
  {
    name: "Emily Davis",
    who: "Product Designer at GHI",
    description: "Professional and efficient service. Highly trustworthy.",
    image: image4,
    rating: 5,
  },
  {
    name: "Daniel Lee",
    who: "Entrepreneur",
    description: "The team exceeded my expectations with their dedication.",
    image: image5,
    rating: 4,
  },
  {
    name: "Sophia Brown",
    who: "Marketing Director at JKL",
    description: "Outstanding service and great attention to detail.",
    image: image6,
    rating: 4.5,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? userReviews.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === userReviews.length - 1 ? 0 : prevIndex + 1));
  };

  const logos = [
    review1, review2, review3, review4, review5, review6,
    review7, review8, review9, review10, review11, review12
  ];

  const brands = [
    brand1, brand2, brand3, brand4, brand5, brand6, brand7,
    brand8, brand9, brand10, brand11, brand12, brand13, brand14,
    brand15, brand16, brand17, brand18, brand19, brand20,
    brand21, brand22
  ];

  const repeatedLogos = [...logos, ...logos];
  const repeatedBrands = [...brands, ...brands];


  return (
    <>
      <div className="scroll-container">
        <div className="scroll-content">
          {repeatedLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="review-container">
        <div className="icon left" onClick={handlePrevClick}>
          <LeftOutlined />
        </div>
        <div className="review-box">
          <img src={userReviews[currentIndex].image} alt={userReviews[currentIndex].name} />
          <Rate allowHalf defaultValue={userReviews[currentIndex].rating} disabled />
          <p>{userReviews[currentIndex].description}</p>
          <h1>{userReviews[currentIndex].name}</h1>
          <h2>{userReviews[currentIndex].who}</h2>
        </div>
        <div className="icon right" onClick={handleNextClick}>
          <RightOutlined />
        </div>
      </div>

      <div className="scroll-container">
        <div className="scroll-content">
          {repeatedBrands.map((brand, index) => (
            <img key={index} src={brand} alt={`brand${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
