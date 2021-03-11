import React from 'react';
import './style.css';

export default class FormClassComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
    };

    onInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({[name]: value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
            if (this.state.password.length < 6) {
                alert(`Choose a longer password, ${this.state.firstName} ${this.state.lastName}`);
            } else {
                alert(`Welcome, ${this.state.firstName} ${this.state.lastName}`);
                this.setState({
                    firstName: '',
                    lastName: '',
                    password: ''
                });
            }
        } else {
            alert('Enter both first and last name');
        }
    };

    render() {
        return (
            <div>
                <p>Hello {this.state.firstName} {this.state.lastName}</p>
                <form onSubmit={this.onFormSubmit} className='form'>
                    <input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.onInputChange} />
                    <input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.onInputChange} />
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onInputChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}