import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { getWeather, filterWeatherData } from "../../utils/WeatherAPI";
import Footer from "../Footer/Footer";
import { CurrentTemperatureUnitContext } from "../../utils/Contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../utils/Contexts/CurrentUserContext.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { getItems, addItem, deleteItem, likeItem, dislikeItem } from "../../utils/api.js";
import { register, login, modifyProfile, checkAuthToken } from "../../utils/auth.js";

function App() {
	const [ weatherData, setWeatherData ] = useState({
		type: "",
		temp: { F: 999 },
		city: "",
	});
	
	const [ activeModal, setActiveModal ] = useState("");
	const [ selectedCard, setSelectedCard ] = useState({  });
	const [ currentTemperatureUnit, setCurrentTemperatureUnit ] = useState('F');
	const [ currentUser, setCurrentUser ] = useState({ });
	const [ clothingItems, setClothingItems ] = useState([ ]);
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);

	const handleCardClick = (card) => {
		setActiveModal("preview");
		setSelectedCard(card);
	}

	const handleRegisterClick = () => {
		setActiveModal("register");
	}

	const handleLoginClick = () => {
		setActiveModal("login");
	}
	
	const handleAddClick = () => {
		setActiveModal("add-garment");
	}

	const handleModifyProfile = (values) => {
		modifyProfile(values)
			.then(() => {
				setCurrentUser({ _id: currentUser._id, email: currentUser._id, name: values.name, avatar: values.avatar });
				closeActiveModal();
			})
			.catch(console.error);
	}

	const handleModifyProfileClick = () => {
		setActiveModal("modify-profile");
	}

	const handleSignout = () => {
		localStorage.removeItem("jwt");
		setIsLoggedIn(false);
	}

	const handleCardLike = ({ id, isLiked }) => {
		const token = localStorage.getItem("jwt");
		// Check if this card is not currently liked
		!isLiked
			? // if so, send a request to add the user's id to the card's likes array
			likeItem(id)
				.then((updatedCard) => {
					setClothingItems((cards) =>
						cards.map((item) => (item._id === id ? updatedCard : item))
					);
				})
				.catch((err) => console.log(err))
			: // if not, send a request to remove the user's id from the card's likes array
		    dislikeItem(id)
				.then((updatedCard) => {
					setClothingItems((cards) =>
						cards.map((item) => (item._id === id ? updatedCard : item))
					);
				})
				.catch((err) => console.log(err));
	};

	const handleUser = (user) => {
		setCurrentUser(user);
	}

	const handleDeleteClick = () => {
		deleteItem(selectedCard._id).then(() => {
			setClothingItems(
				clothingItems.filter((item) => {
					return item._id !== selectedCard._id;
				})
			)
			closeActiveModal();
		}).catch(console.error);
	}

	const closeActiveModal = () => {
		setActiveModal("");
	}

	const renderCards = () => {
		getItems().then((data) => {
			setClothingItems(data);
		}).catch(console.error);
	}
	
	const onAddItem = (values) => {
		addItem(values).then((data) => {
			setClothingItems(
				[ { _id: data._id,
					name: values.name,
					imageUrl: values.imageUrl,
					weather: values.weather,
					likes: data.likes,
					owner: data.owner }, ...clothingItems ]
			)
			closeActiveModal();
		}).catch(console.error);
	}

	const onLogin = (values) => {
		login(values).then((data) => {
			localStorage.setItem("jwt", data.token);
			setIsLoggedIn(true);
			closeActiveModal();
		}).catch(console.error);
	}
	
	const onRegister = (values) => {
		register(values).then((values) => {
			closeActiveModal();
			onLogin({ email: values.email, password: values.password });
		}).catch(console.error);
	}

	const handleToggleSwitchChange = () => {
		if (currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F');
		if (currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C');
	}

	useEffect(() => {
		const token = localStorage["jwt"];

		checkAuthToken(token).then((user) => {
			setCurrentUser(user);
			setIsLoggedIn(true);
		}).catch(console.error);
	}, []);

	useEffect(() => {
		getWeather(coordinates, APIkey).then((data) => {
			const filteredData = filterWeatherData(data);
			setWeatherData(filteredData);
		}).catch(console.error);
	}, []);

	useEffect(() => {
		renderCards();
	}, []);
	
	return (
		<div className="page">
			<CurrentTemperatureUnitContext.Provider value = {{ currentTemperatureUnit, handleToggleSwitchChange }} >
				<CurrentUserContext.Provider value={{ currentUser, isLoggedIn, handleUser }}>
					<div className="page__content">
						<Header handleRegisterClick={handleRegisterClick}
								handleLoginClick={handleLoginClick}
								handleAddClick={handleAddClick}
								weatherData={weatherData} />

						<Routes>
							<Route path="" element={
								<Main weatherData={weatherData}
									  handleCardClick={handleCardClick}
									  clothingItems={clothingItems}
								      onCardLike={handleCardLike} />
							} />
							<Route path="/profile" element={ // check the token in storage, if it exists, continue, otherwise, go to main page
								<Profile handleAddClick={handleAddClick}
										 onCardClick={handleCardClick}
										 onCardLike={handleCardLike}
										 handleModifyProfile={handleModifyProfileClick}
										 handleSignout={handleSignout}
										 clothingItems={clothingItems}
								/>	   
							} />
						</Routes>

						<footer />
					</div>

					<AddItemModal activeModal={activeModal}
						onClose={closeActiveModal}
						onAddItem={onAddItem}
					/>

					<ItemModal activeModal={activeModal}
						card={selectedCard}
						onClose={closeActiveModal}
						onDeleteItem={handleDeleteClick} />

					<EditProfileModal
						activeModal={activeModal}
						onClose={closeActiveModal}
						onSubmit={handleModifyProfile}
					/>
					
					<RegisterModal activeModal={activeModal}
						onClose={closeActiveModal}
						onRegister={onRegister} />

					<LoginModal activeModal={activeModal}
						onClose={closeActiveModal}
						onLogin={onLogin} />

				</CurrentUserContext.Provider>
			</CurrentTemperatureUnitContext.Provider>
		</div>
    );
}

export default App;
