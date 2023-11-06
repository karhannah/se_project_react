const ItemModal = ({ selectedCard, onClose, onKeyDown }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} onKeyDown={onKeyDown}>
          Close
        </button>
        <img src={selectedCard.link}></img>
        <div>{selectedCard.name}</div>
        <div>weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
