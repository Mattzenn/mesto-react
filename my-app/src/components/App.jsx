import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'


function App() {
    return (
        <div className="page">
            <Header />
            <Main />
            <Footer />
            <div className="popup popup_profile-edit">
                <div className="popup__container">
                    <form className="popup__form" name="popupFormProfile" novalidate>
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <input id="userName" required name="userName" className="popup__input popup__input_user_name" type="text" placeholder="Имя" minlength="2" maxlength="40"></input>
                        <span id="userName-error" className="popup__input-error"></span>
                        <input id="userAbout" required name="userAbout" className="popup__input popup__input_user_description" type="text" placeholder="Профессия" minlength="2" maxlength="200"></input>
                        <span id="userAbout-error" className="popup__input-error"></span>
                        <button type="submit" className="popup__button">Сохранить</button>
                    </form>
                    <button type="button" className="popup__close-button popup__close-button_profile-edit"></button>
                </div>
            </div>

            <div className="popup popup_card-add">
                <div className="popup__container">
                    <form className="popup__form" name="popupFormCard" novalidate>
                        <h2 className="popup__title">Новое место</h2>
                        <input id="placeName" required name="name" className="popup__input popup__input_place_name" type="text" placeholder="Название" minlength="2" maxlength="30"></input>
                        <span id="placeName-error" className="popup__input-error"></span>
                        <input id="link" required name="link" className="popup__input popup__input_place_description" type="url" placeholder="Ссылка на картинку" minlength="2" maxlength="100000"></input>
                        <span id="link-error" className="popup__input-error"></span>
                        <button type="submit" className="popup__button">Создать</button>
                    </form>
                    <button type="button" className="popup__close-button popup__close-button_card-add"></button>
                </div>
            </div>

            <div className="popup popup_zoom-image">
                <div className="popup__figure-container popup__overlay">
                    <figure className="popup__figure">
                        {/* <img className="popup__image" src="#" alt="#"> */}
                        <figcaption className="popup__caption"></figcaption>
                    </figure>
                    <button type="button" className="popup__close-button popup__close-button_zoom-image"></button>
                </div>
            </div>

            <div className="popup popup_confirm-delete">
                <div className="popup__container">
                    <form className="popup__form" name="popupFormCard" novalidate>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button type="submit" className="popup__button popup__button_confirm-delete">Да</button>
                    </form>
                    <button type="button" className="popup__close-button popup__close-button_card-add"></button>
                </div>
            </div>

            <div className="popup popup_avatar-edit">
                <div className="popup__container">
                    <form className="popup__form" name="popupFormAvatar" novalidate>
                        <h2 className="popup__title">Обновить аватар</h2>
                        <input id="avatar-link" required name="userAvatar" className="popup__input popup__input_place_description" type="url" placeholder="Ссылка на картинку" minlength="2" maxlength="100000"></input>
                        <span id="avatar-link-error" className="popup__input-error"></span>
                        <button type="submit" className="popup__button">Сохранить</button>
                    </form>
                    <button type="button" className="popup__close-button popup__close-button_card-add"></button>
                </div>
            </div>

            <template id="card-template">
                <li className="elements__card">
                    {/* <img className="elements__image" src="#" alt="#"> */}
                    <div className="elements__container">
                        <h2 className="elements__title"></h2>
                        <div className="elements__like">
                            <button type="button" className="elements__like-button"></button>
                            <span className="elements__like-count">0</span>
                        </div>
                    </div>
                    <button className="elements__remove-button" type="button"></button>
                </li>
            </template>


        </div>
    );
}

export default App;