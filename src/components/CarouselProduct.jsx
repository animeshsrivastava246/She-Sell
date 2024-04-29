import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
	return (
		<div className="bg-she_sell m-3 p-5">
			<div className="text-3xl bg-she_sell-color4 mr-1 ml-0 mb-4 mt-0  font-semibold p-3">Best Sellers</div>
			<Swiper
				slidesPerView={7}
				spaceBetween={10}
				navigation={true}
				modules={[Navigation]}
			>
				{Array.from({ length: 8 }, (_, i) => (
					<SwiperSlide key={i}>
						<Link to={`/product/${i}`}>
							<img
								src={`../images/product_${i}_small.jpg`}
								alt="Carousal Product"
							/>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CarouselProduct;
