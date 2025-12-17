import "./destinations.css";
import SectionHeader from "../../layout/sectionHeader/SectionHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import Card from "../../layout/card_destination/Card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Destinations = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <section className="destination" id="destination">
      <div className="container">
        <SectionHeader
          title="Destinations"
          subtitle="Best fares from Riyadh"
          showMore={true}
          toPage={"destinations"}
        />

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            568: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Card
              country={"Cairo"}
              price={1180}
              imgUrl={"cairo"}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              country={"Bali"}
              price={2500}
              imgUrl={"bali"}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              country={"Athens"}
              price={1811}
              imgUrl={"athens"}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              country={"Dubai"}
              price={750}
              imgUrl={"dubai"}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              country={"Moscow"}
              price={3400}
              imgUrl={"moscow"}
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              country={"New York"}
              price={3800}
              imgUrl={"new york"}
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Destinations;
