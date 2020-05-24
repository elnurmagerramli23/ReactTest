import React from 'react'
import Input from '../input/input'
import './modal.css'
import {sendPutRequest} from '../../REST'

class Modal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          name: '',
          age: 0,
          email: '',
          phone: '',
        }
    }

    handleData = event => {
        console.log(event.target.value);
        this.setState(
            {
            name: event.target.value,  
            age: event.target.value, 
            email: event.target.value, 
            phone: event.target.value, 
            }
        )

        const person = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            phone: this.state.phone,
        }

        console.log(person);
        return person;
    }

    onSubmit = person => {
        console.log('submit');
        sendPutRequest(person);
    }

    render() {
        const {
            name,
            age,
            email,
            phone,
        } = this.state;

        const {handleData} = this;
        const {onSubmit} = this;

        return (
            <div className="container">
                <form>
                    <h1 className = 'container__title'>Input information about you</h1>
                    <p className = 'container__text'>Name :</p>
                    <Input 
                        type = {'text'}
                        onChange = {name}
                        onKeyPress = {event => handleData(event)}
                        className = {'container__params'}
                        id = {'fullNameInput'}
                        placeholder = {'Enter your full name...'}
                    />
                    <p className = 'container__text'>Age :</p>
                    <Input 
                        type = {'number'}
                        className = {'container__params'}
                        id = {'ageInput'}
                        placeholder = {'Enter your age...'}
                        onChange = {age}
                        onKeyPress = {event => handleData(event)}
                    />
                    <p className = 'container__text'>e-mail :</p>
                    <Input 
                        type = {'email'}
                        className = {'container__params'}
                        id = {'emailInput'}
                        placeholder = {'Enter your email...'}
                        onChange = {email}
                        onKeyPress = {event => handleData(event)}
                    />
                    <p className = 'container__text'>Telephone number :</p>
                    <Input 
                        type = {'tel'}
                        className = {'container__params'}
                        id = {'phoneInput'}
                        placeholder = {'Enter your phone number...'}
                        onChange = {phone}
                        onKeyPress = {event => handleData(event)}
                    />  
                    <div className = 'container__buttons'>
                        <Input
                            type = {'submit'}
                            className = {'container__buttons-submit'}
                            value = {'Send'}
                        />
                        <Input
                            type = {'reset'}
                            className = {'container__buttons-reset'}
                            value = {'reset'}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Modal;