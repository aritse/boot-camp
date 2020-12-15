import {Component} from "react";
import "./style.css";

export default class FormClassComponent extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: ""
    }

    onChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
            if (this.state.password.length < 6) {
                alert(`Choose longer password, ${this.state.firstName} ${this.state.lastName}`);
            } else {
                alert(`Welcome, ${this.state.firstName} ${this.state.lastName}`);
                this.setState({
                    firstName: "",
                    lastName: "",
                    password: ""
                });
            }
        } else {
            alert("Enter both first and last names.");
        }
    };

    render() {
        return (
            <div>
                <p>Hello {this.state.firstName} {this.state.lastName}</p>
                <form onSubmit={this.onSubmit} className="form">
                    <input name="firstName" onChange={this.onChange} value={this.state.firstName} placeholder="First Name"></input>
                    <input name="lastName" onChange={this.onChange} value={this.state.lastName} placeholder="Last Name"></input>
                    <input name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" type="password"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
