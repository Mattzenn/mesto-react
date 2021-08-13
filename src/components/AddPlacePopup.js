import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
    const [name, setName] = React.useState('')
    const [link, setLink] = React.useState('')

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleLinkChange(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace({
            name: name,
            link: link,
        })
    }

    return (
        <PopupWithForm name='card-add' title='Новое место' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input id="placeName" required name="name" className="popup__input popup__input_place_name" type="text" placeholder="Название" minLength="2" maxLength="30" required onChange={handleNameChange}></input>
            <span id="placeName-error" className="popup__input-error"></span>
            <input id="link" required name="link" className="popup__input popup__input_place_description" type="url" placeholder="Ссылка на картинку" minLength="2" maxLength="100000" required onChange={handleLinkChange}></input>
            <span id="link-error" className="popup__input-error"></span>
        </PopupWithForm>
    )


}

export default AddPlacePopup