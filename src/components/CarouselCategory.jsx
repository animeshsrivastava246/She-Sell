import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate, createSearchParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
const CarouselCategory = () => {
	const navigate = useNavigate();
	const searchCategory = (category) => {
		navigate({
			pathname: "search",
			search: `${createSearchParams({
				category: `${category}`,
				searchTerm: "",
			})}`,
		});
	};
	return (
		<div className="bg-she_sell m-3 p-5">
			<div className="text-3xl font-semibold p-3 bg-she_sell-color4 mr-1 ml-0 mb-4 mt-0">Shop by Category</div>
			<Swiper
				slidesPerView={5}
				spaceBetween={10}
				navigation={true}
				modules={[Navigation]}
			>
				<SwiperSlide
					className="cursor-pointer"
					onClick={() => searchCategory("All Products")}
				>
					<img src="../images/category_0.jpg" alt="Img" />
				</SwiperSlide>
				<SwiperSlide
					className="cursor-pointer"
					onClick={() => searchCategory("She Sell's Retail")}
				>
					<img src="../images/category_1.jpg" alt="Img" />
				</SwiperSlide>
				<SwiperSlide
					className="cursor-pointer"
					onClick={() => searchCategory("Clothing")}
				>
					<img src="../images/category_2.jpg" alt="Img" />
				</SwiperSlide>
				<SwiperSlide
					className="cursor-pointer"
					onClick={() => searchCategory("Electronics")}
				>
					<img src="../images/category_3.jpg" alt="Img" />
				</SwiperSlide>
				<SwiperSlide
					className="cursor-pointer"
					onClick={() => searchCategory("Household")}
				>
					<img src="../images/category_4.jpg" alt="Img" />
				</SwiperSlide>
				<SwiperSlide
					className="cursor-pointer"
					onClick={() => searchCategory("Variegate")}
				>
					<img src="../images/category_5.jpg" alt="Img" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default CarouselCategory;
