import React, { useState } from "react";
import { Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="banner">
        <Swiper
          slidesPerView={1}
          modules={[Thumbs]}
          thumbs={{
            swiper: thumbsSwiper,
          }}
        >
          <SwiperSlide>
            <div className="banner-image">
              <img
                src="src/assets/Images/1.jpg"
                alt="a boy wearing a virtual sunglasses"
              />
              <div className="banner--text">
                <h2>Welcome to Marvel Swiper</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  <br /> Ducimus soluta culpa repudiandae id doloremque facilis{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-image">
              <img src="src/assets/Images/2.jpg" alt="a lion" />
              <div className="banner--text">
                <h2>Welcome to Marvel Swiper</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  <br /> Ducimus soluta culpa repudiandae id doloremque facilis{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-image">
              <img src="src/assets/Images/3.jpg" alt="a man" />
              <div className="banner--text">
                <h2>Welcome to Marvel Swiper</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  <br /> Ducimus soluta culpa repudiandae id doloremque facilis{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* -----------THUMBS--------------  */}
        <Swiper
          className="banner-thumbs"
          modules={[Thumbs]}
          slidesPerView={3}
          spaceBetween={10}
          // onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
        >
          <SwiperSlide>
            <div className="thumbs">
              <img
                src="src/assets/Images/1.jpg"
                alt="a boy wears a Virtual reality glasses"
                className="w-100"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="thumbs ">
              <img
                src="src/assets/Images/2.jpg"
                alt="a lion"
                className="w-100"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="thumbs">
              <img
                src="src/assets/Images/3.jpg"
                alt="a man"
                className="w-100"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
