import React from 'react'

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    {/* <img className="profile__avatar" src="<%=require('./images/Avatar.png')%>" alt="Аватар"> */}
                    <button type="button" className="profile__avatar-button"></button>
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-button"></button>
                    </div>
                    <h2 className="profile__about">Исследователь океана</h2>
                </div>
                <button type="button" className="profile__add-button"></button>
                <section className="cards">
                    <ul className="elements"></ul>
                </section>
            </section>
        </main>
    )
}

export default Main
