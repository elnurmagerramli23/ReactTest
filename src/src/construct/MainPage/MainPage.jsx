import React from 'react'
import Modal from '../Modal/ModalPage'
import './main.css'

export default class MainPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isShowModal: false,
        }
    }

    changeModal = isShow => {
        this.setState ({isShowModal: isShow}) 
    }

    render() {
        const { changeModal } = this;
        const { isShowModal } = this.state;
    
        return (
            <>
                {isShowModal ? (<Modal/>) : 
                <div className = 'modal-page'>
                    <h2 className = 'modal-page__title'>Submit form ...</h2>
                    <button className = 'modal-page__btn' onClick = {changeModal}>Open submit form</button>
                </div>
                } 
            </>
        )
    }
}