import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/WeatherAPI";
import Footer from "../Footer/Footer";
import { CurrentTemperatureUnitContext } from "../Contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import { getItems } from "../../utils/api.js";

function App() {
	const [ weatherData, setWeatherData ] = useState({
		type: "",
		temp: { F: 999 },
		city: "",
	});
	
	const [ activeModal, setActiveModal ] = useState("");
	const [ selectedCard, setSelectedCard ] = useState({  });
	const [ currentTemperatureUnit, setCurrentTemperatureUnit ] = useState('F');
	const [ clothingItems, setClothingItems ] = useState([]);

	const handleCardClick = (card) => {
		setActiveModal("preview");
		setSelectedCard(card);
	}
	
	const handleAddClick = () => {
		setActiveModal("add-garment");
	}

	const closeActiveModal = () => {
		setActiveModal("");
	}

	const onAddItem = (values) => {
		console.log(values);
		
	}

	const handleToggleSwitchChange = () => {
		if (currentTemperatureUnit === 'C') setCurrentTemperatureUnit('F');
		if (currentTemperatureUnit === 'F') setCurrentTemperatureUnit('C');
	}

	useEffect(() => {
		getWeather(coordinates, APIkey).then((data) => {
			const filteredData = filterWeatherData(data);
			setWeatherData(filteredData);
		}).catch(console.error);
	}, []);

	useEffect(() => {
		getItems().then((data) => {
			console.log(data);
			// Set the clothing items
			setClothingItems(data);
		}).catch(console.error);
	}, []);
	
	return (
		<div className="page">
			<CurrentTemperatureUnitContext.Provider value = {{currentTemperatureUnit, handleToggleSwitchChange}} >
			<div className="page__content">
				<Header handleAddClick = { handleAddClick } weatherData = { weatherData } />

				<Routes>                         
					<Route path = "" element = {
							   // Pass clothingItems as a prop
							   <Main weatherData = { weatherData }
									 handleCardClick = { handleCardClick }
							         clothingItems = { clothingItems } />
						   } />
					<Route path = "/profile" element = {
							   <Profile onCardClick = { handleCardClick }
							            clothingItems = { clothingItems } />
						   } />
				</Routes>
				
				<Footer />
			</div>
				<AddItemModal activeModal = { activeModal }
				              onClose = { closeActiveModal }
							  onadditem = { onAddItem }
				/>

				<ItemModal activeModal = { activeModal  }
						   card = { selectedCard }
						   onClose = { closeActiveModal } />

			</CurrentTemperatureUnitContext.Provider>

		</div>
	);
}

export default App;
