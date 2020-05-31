import React, {Component} from 'react';
//import User from "./components/User";
//import './App.css';
import './modal.css'
import '../input/input.css'




class Modal extends Component{

    constructor() {
        super();

        this.state = {
            inputValues : {}
        }
    }


    inputChangeHandler = (e) => {

        const {name, value} = e.target;

        this.setState(prevState => ({
            inputValues : {
            ...prevState.inputValues,
            [name] : value
        }
        }));


    }

    checkFormHandler = (e) => {
        e.preventDefault();

        console.log( this.state.inputValues );


        return false;
    }

    render() {
        return (
            <div className='container'>
                <h1 className = 'container__title'>Input information about you</h1>
                <form action='' method='post' onSubmit={this.checkFormHandler}>
                    <span className='container__text'>Name:</span> <input type='text' name='name' onChange={this.inputChangeHandler} className='container__params'/> <br/>
                    <span className='container__text'>Email:</span><input type='email' name='email' onChange={this.inputChangeHandler} className='container__params'/><br/>
                    <span className='container__text'>Age:</span><input type='number' name='age' onChange={this.inputChangeHandler} className='container__params'/><br/>
                    <span className='container__text'>Phone:</span><input type='number' name='telephone' onChange={this.inputChangeHandler} className='container__params'/><br/>
                    <div className='container__buttons '>
                        <button type='submit' className='container__buttons-submit'>Submit</button>
                        <input type='reset' value='RESET' className='container__buttons-reset'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Modal;