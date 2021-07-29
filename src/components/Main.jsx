import React from 'react'
import { api } from '../utils/Api'
import Card from './Card'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = React.useState('test')
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getApiUserInfo().then((data) => {
            setUserName(data.name)
            setUserDescription(data.about)
            setUserAvatar(data.avatar)
        })
            .catch((err) => console.log(err))
    }, [])

    React.useEffect(() => {
        api.getCards().then((data) => {
            setCards(data)
        })
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар"></img>
                    <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    </div>
                    <h2 className="profile__about">{userDescription}</h2>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="cards">
                <ul className="elements">
                    {cards.map(({ id, ...props }) => <Card key={id} {...props} card={{ id, ...props }} onCardClick={onCardClick} />)}
                </ul>
            </section>
        </main>
    )
}

export default Main
