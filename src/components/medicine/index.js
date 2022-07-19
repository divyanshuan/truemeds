import React from "react";
import "../../styles/medicines.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { Navigation } from "swiper";

import Button from "@mui/material/Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import meddata from "../../data/medicinedetail.json";
import nxtbtn from "../../assets/arrow-right.png";
import prevbtn from "../../assets/left-arrow.png";

const Medicine = () => {
  return (
    <>
      <div className="main_division">
        <div className="heading_div">
          <h1>Medicines popularly bought on Truemeds</h1>
          <div className="head_buttons">
            <p>Deals For You </p>
            <div className="buttonsdiv">
              {" "}
              <button type="button" className="prev mybutton">
                <img
                  src="https://www.truemeds.in/static/media/prev.3a1697ee.svg"
                  alt="prevbtn"
                  height={40}
                />
              </button>
              <button type="button" className="next mybutton">
                <img
                  src="https://www.truemeds.in/static/media/next.a6438e65.svg"
                  alt="nxtbtn"
                  height={40}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="box_main">
          <Swiper
            className="mySwiper"
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            loop={true}
            spaceBetween={1}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
              999: {
                // width: 950,
                slidesPerView: 3,
              },
            }}
          >
            {meddata.Medtail.map((detail) => {
              return (
                <>
                  <SwiperSlide className="slide_box" key={detail.id}>
                    <div className="master_box">
                      <div className="image_area">
                        <Swiper
                          className="mySwiper"
                          modules={[Autoplay, Pagination, Navigation]}
                          loop={true}
                          slidesPerView={1}
                          pagination={{
                            clickable: true,
                          }}
                          autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                        >
                          <SwiperSlide>
                            <img
                              height={150}
                              width={150}
                              src={detail.firstimg}
                              alt="medimg"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              height={150}
                              width={150}
                              src={detail.secondimg}
                              alt="medimg"
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <p>{detail.name}</p>
                      <p className="dim">{detail.compnyname}</p>
                      <p className="bold">
                        <span className="crossed">
                          {" "}
                          ₹{detail.originalprice}
                        </span>{" "}
                        ₹{detail.discountedPrice}
                      </p>
                      <p className="bold">
                        {" "}
                        ( Min {detail.offerprecent}% off )
                      </p>
                      <div className="my_button">
                        {" "}
                        <Button variant="contained">+ Add to cart</Button>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Medicine;
