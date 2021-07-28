import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'


function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function onCardClick(card) {
        setSelectedCard(card)
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setSelectedCard(null)
    }

    return (
        <div className="page">
            <Header />
            <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={onCardClick} />
            <Footer />
            <PopupWithForm name='profile-edit' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input id="userName" required name="userName" className="popup__input popup__input_user_name" type="text" placeholder="Имя" minlength="2" maxlength="40"></input>
                <span id="userName-error" className="popup__input-error"></span>
                <input id="userAbout" required name="userAbout" className="popup__input popup__input_user_description" type="text" placeholder="Профессия" minlength="2" maxlength="200"></input>
                <span id="userAbout-error" className="popup__input-error"></span>

            </PopupWithForm>

            <PopupWithForm name='card-add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input id="placeName" required name="name" className="popup__input popup__input_place_name" type="text" placeholder="Название" minlength="2" maxlength="30"></input>
                <span id="placeName-error" className="popup__input-error"></span>
                <input id="link" required name="link" className="popup__input popup__input_place_description" type="url" placeholder="Ссылка на картинку" minlength="2" maxlength="100000"></input>
                <span id="link-error" className="popup__input-error"></span>
            </PopupWithForm>

            <PopupWithForm name='avatar-edit' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input id="avatar-link" required name="userAvatar" className="popup__input popup__input_place_description" type="url" placeholder="Ссылка на картинку" minlength="2" maxlength="100000"></input>
                <span id="avatar-link-error" className="popup__input-error"></span>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />


            {/* <div className="popup popup_confirm-delete">
                <div className="popup__container">
                    <form className="popup__form" name="popupFormCard" novalidate>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button type="submit" className="popup__button popup__button_confirm-delete">Да</button>
                    </form>
                    <button type="button" className="popup__close-button popup__close-button_card-add"></button>
                </div>
            </div> */}
        </div>
    );
}

export default App;