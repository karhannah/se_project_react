import React from "react";

const CurrentUserContext = React.createContext({
	currentUser: {
		_id: "",
		email: "",
		name: "",
		avatar: ""
	},
	handleUserChange: () => {
		
	}
})

export { CurrentUserContext };
