import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "./";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
	const [user] = useAuthState(auth);
	const cart = useSelector((state) => state.cart.productsNumber);
	return (
		<header className="min-w-[1000px]">
			<div className="flex bg-she_sell-color1 p-2 text-white h-[60px]">
				{/* Left */}
				<div className="flex items-center m-1">
					<Link to={"/"}>
						<img
							className="h-[35px] w-[100px] m-2"
							src={"../images/SheSell.png"}
							alt="She Sell"
						/>
					</Link>
					<div
						className="flex items-center px-1"
						onClick={() => auth.signOut()}
					>
						<img
							className="h-[40px] w-[40px] m-2"
							src={user.photoURL}
							alt="IMG"
						/>
						<div className="text-sm xl:text-base font-bold">
							{user.displayName}
						</div>
					</div>
				</div>
				{/* Mid */}
				<div className="flex grow relative items-center bg-she_sell-color4">
					<Search />
				</div>
				{/* Right */}
				<div className="flex items-center m-4">
					<div className="px-4">
						<div className="text-xs xl:text-sm">Deliver To</div>
						<div className="text-sm xl:text-base font-bold">Pune</div>
					</div>
					<Link to={"/checkout"}>
						<div className="flex px-3">
							<ShoppingCartIcon className="h-[40px]" />
							<div className="relative">
								<div className="absolute right-[2px] bottom-[7px] font-bold m-3 text-orange-400">
									{cart}
								</div>
							</div>
							<div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="flex bg-she_sell-color2 text-white space-x-3 text-sm xl:text-sm p-2 pl-6">
				<div className="border-[1px] border-she_sell-color4 p-1 cursor-pointer">
					Today's Deals
				</div>
				<div className="border-[1px] border-she_sell-color4 p-1 cursor-pointer">
					Customer Service
				</div>
				<div className="border-[1px] border-she_sell-color4 p-1 cursor-pointer">
					Registry
				</div>
				<div className="border-[1px] border-she_sell-color4 p-1 cursor-pointer">
					Gift Cards
				</div>
				<div
					className="border-[1px] border-she_sell-color4 p-1 cursor-pointer"
					onClick={(e) => {
						e.preventDefault();
						window.open("https://she-sell-seller.vercel.app/");
					}}
				>
					Sell
				</div>
			</div>
		</header>
	);
};

export default NavBar;
