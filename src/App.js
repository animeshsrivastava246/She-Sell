import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	HomePage,
	NavBar,
	Checkout,
	SearchResults,
	ProductPage,
	Login,
	Payment,
} from "./components";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
	const [user] = useAuthState(auth);

	return (
		<>
			{!user ? (
				<Login />
			) : (
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route path="/search" element={<SearchResults />} />
						<Route path="/product/:id" element={<ProductPage />} />
						<Route path="/Checkout" element={<Checkout />} />
						<Route path="/Payment" element={<Payment />} />
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
};

export default App;
