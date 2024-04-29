import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
	return (
		<div className="h-[600px] bg-white">
			<Swiper
				loop={true}
				spaceBetween={0}
				navigation={true}
				modules={[Navigation]}
				autoplay={{ delay: 2000 }}
				className="h-[80%]"
			>
				<SwiperSlide>
					<img src={"../images/Carousel_1.png"} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={"../images/Carousel_2.png"} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={"../images/Carousel_3.png"} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={"../images/Carousel_4.png"} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={"../images/Carousel_5.png"} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={"../images/Carousel_6.png"} alt="" />
				</SwiperSlide>
			</Swiper>
			<div className="h-[100%] bg-gradient-to-b from-she_sell-color1" />
		</div>
	);
};

export default Carousel;
