import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";
const Profile = ({ onCreate, clothingItems, onSelectCard, onCardLike }) => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile__items-container">
        <div className="profile__items-text">
          Your Items
          <button
            className="profile__add-button"
            onClick={onCreate}
            type="button"
          >
            + Add new
          </button>
        </div>
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCardLike={onCardLike}
        />
      </div>
    </div>
  );
};

export default Profile;

// MyProfile.js
// review code below, compare it to current code

// import React from "react";
// import NavBar from "./NavBar.js";
// import "./styles/MyProfile.css";

// function MyProfile(props) {
//   let { username, email } = props.userData;
//   return (
//     <>
//       <NavBar />
//       <div className="my-profile">
//         <div className="my-profile__container">
//           <div className="my-profile__header">
//             <p> My profile </p> <hr className="my-profile__rule" />
//           </div>{" "}
//           <div className="my-profile__info">
//             <div className="my-profile__user">
//               <p className="my-profile__key"> Username: </p>{" "}
//               <p className="my-profile__value"> {username} </p>{" "}
//             </div>{" "}
//             <div className="my-profile__user">
//               <p className="my-profile__key"> Email: </p>{" "}
//               <p className="my-profile__value"> {email} </p>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </div>{" "}
//     </>
//   );
// }

// export default MyProfile;
