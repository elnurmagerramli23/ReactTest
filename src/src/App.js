import React from 'react';
import Input from './construct/input/input'
import './App.css';
// import Modal from './construct/Modal/Modal'

function App() {
return (
    <div>
        <div className = 'container'>
            <h1 className = 'container__title'>Contact blank</h1>
            <form>
                <p className = 'container__text'>Name :</p>
                    <Input
                    type = {'text'}
                    className = {'container__params'}
                    placeholder = {'Insert your name'}
                    />
                    <p className = 'container__text'>e-mail :</p>
                    <Input
                    type = {'email'}
                    className = {'container__params'}
                    placeholder = {'Insert your mail'}
                    />
                    <p className = 'container__text'>Age :</p>
                    <Input
                    type  = {'number'}
                    className = {'container__params'}
                    placeholder = {'Set your age'}
                    />
                    <p className = 'container__text'>Telephone number :</p>
                    <Input
                    type = {'tel'}
                    className = {'container__params'}
                    placeholder = {'Input your number'}
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
        <div className = 'modal-page'>
            <h2 className = 'modal-page__title'>Submit form ...</h2>
            <button className = 'modal-page__btn'>Open submit form</button>
        </div>
    </div>
    );
}

export default App;
