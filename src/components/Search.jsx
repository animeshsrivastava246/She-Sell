import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { callAPI } from "../utilities/CallApi";
import { useNavigate, createSearchParams } from "react-router-dom";

const Search = () => {
	const [suggestions, setSuggestions] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [category, setCategory] = useState("All");
	const navigate = useNavigate();
	const getSuggestions = () => {
		callAPI("data/suggestions.json").then((suggestionsResults) => {
			setSuggestions(suggestionsResults);
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate({
			pathname: "search",
			search: `${createSearchParams({
				category: `${category}`,
				searchTerm: `${searchTerm}`,
			})}`,
		});
		setSearchTerm("");
		setCategory("All Products");
	};
	useEffect(() => {
		getSuggestions();
	}, []);
	return (
		<div className="w-[100%] p-3">
			<div className="flex items-center h-10 bg-she_sell rounded">
				<select
					name=""
					id=""
					onChange={(e) => {
						e.preventDefault();
						setCategory(e.target.value);
					}}
					className="p-2 bg-she_sell-color4 border text-xs xl:text-sm text-black"
				>
					<option value="All Products">All Products</option>
					<option value="She Sell's Retail">She Sell's Retail</option>
					<option value="Clothing">Clothing</option>
					<option value="Electronics">Electronics</option>
					<option value="Household">Household</option>
					<option value="Variegate">Variegate</option>
				</select>
				<input
					className="flex grow items-center h-[100%] rounded-l text-black"
					type="text"
					value={searchTerm}
					onChange={(e) => {
						e.preventDefault();
						setSearchTerm(e.target.value);
					}}
				/>
				<button className="w-[45px]" onClick={handleSubmit}>
					<MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
				</button>
			</div>
			{suggestions && (
				<div className="bg-white text-black w-full z-40 absolute">
					{suggestions
						.filter((suggestions) => {
							const currentSearchTerm = searchTerm.toLowerCase();
							const title = suggestions.title.toLowerCase();
							return (
								currentSearchTerm &&
								title.startsWith(currentSearchTerm) &&
								title !== currentSearchTerm
							);
						})
						.slice(0, 10)
						.map((suggestion) => (
							<div
								key={suggestions.id}
								onClick={() => setSearchTerm(suggestion.title)}
							>
								{suggestion.title}
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default Search;
