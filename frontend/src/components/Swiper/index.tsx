import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { ContainerSlider, ImgSlider } from "./style";

const data = [
  {
    id: "4",
    image:
      "https://motorshow.com.br/wp-content/uploads/sites/2/2016/03/corvette-grand-sport.jpeg",
  },
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/6969035/pexels-photo-6969035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "5",
    image:
      "https://images.pexels.com/photos/13781/pexels-photo-13781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "6",
    image:
      "https://i.gaw.to/content/photos/55/12/551251-porsche-911-t-2023.jpeg?1024x640",
  },
];

const CustomSwiperComponent = () => {
  return (
    <ContainerSlider>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="assim"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ImgSlider src={item.image} alt="Slider" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerSlider>
  );
};

export default CustomSwiperComponent;
