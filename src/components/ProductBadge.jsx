const ProductBadge = ({ badge }) => {
	if (badge === "choice") {
		return (
			<span className="text-xs xl:text-sm bg-clate-800 text-white p-1">
				She Sell's <span className="text-orange-500">Choice</span>
			</span>
		);
	} else if (badge === "seller") {
		return (
			<span className="text-xs xl:text-sm bg-orange-500 text-white p-1">
				#1 Best Seller
			</span>
		);
	} else if (badge === "limited") {
		return (
			<span className="text-xs xl:text-sm bg-red-500 text-white p-1">
				Limited Time Deal
			</span>
		);
	} else return <div></div>;
};

export default ProductBadge;
