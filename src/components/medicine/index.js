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

const Medicine = () => {
  return (
    <>
      <div className="main_division">
        <div className="heading_div">
          <h1>Medicines popularly bought on Truemeds</h1>
          <p>Deals For You </p>
        </div>
        <div className="box_main">
          <Swiper
            className="mySwiper"
            modules={[Autoplay, Navigation]}
            navigation={true}
            loop={true}
            spaceBetween={1}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 1,
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
                  <SwiperSlide className="slide_box">
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

/*{
    <Swiper
            className="mySwiper"
            modules={[Autoplay, Navigation]}
            navigation={true}
            loop={true}
            centeredSlides={true}
            spaceBetween={1}
            slidesPerView={1}
          >
            <SwiperSlide className="slide_box">
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
                  >
                    <SwiperSlide>
                      <img
                        height={150}
                        width={150}
                        src="https://media.istockphoto.com/photos/falling-antibiotics-healthcare-background-picture-id1300036753?k=20&m=1300036753&s=612x612&w=0&h=dlbqUqv7hXHw01H1CCycVV8ZhdsNpl_3iehkKasCi3E="
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        height={150}
                        width={150}
                        src="https://media.istockphoto.com/photos/falling-antibiotics-healthcare-background-picture-id1300036753?k=20&m=1300036753&s=612x612&w=0&h=dlbqUqv7hXHw01H1CCycVV8ZhdsNpl_3iehkKasCi3E="
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <h3>hello</h3>
                <p>world</p>
                <p>price</p>
                <p>discount</p>
                <button>hello</button>
              </div>
            </SwiperSlide>
          </Swiper>
} */
