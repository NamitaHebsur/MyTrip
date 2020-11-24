import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Register.css'



export default class Register extends Component {
   
    constructor(){
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }

    handleChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    submituserRegistrationForm(e){
        e.preventDefault();
        if(this.validateForm()){
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Registered Successfully...");
        }
        
    }

    validateForm(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["username"]){
            formIsValid = false;
            errors["username"] = "*Please enter your username."
        }

        if(typeof fields["username"] !== "undefined"){
            if(!fields["username"].match(/^[a-zA-Z]*$/)){
                formIsValid = false;
                errors["username"] = "*please enter Alphabet characters only.";
            }
        }

        if(!fields["emailid"]){
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-id."
        }

        if(typeof fields["emailid"] !== "undefined"){
            if(!fields["emailid"].match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,8})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)/i)){
                formIsValid = false;
                errors["emailid"] = "*please enter valid email-id.";
            }
        }

        if(!fields["mobileno"]){
            formIsValid = false;
            errors["mobileno"] = "*Please enter your Phone No."
        }

        if(typeof fields["mobileno"] !== "undefined"){
            if(!fields["mobileno"].match(/^[6-9]{1}[0-9]{9}$/)){
                formIsValid = false;
                errors["mobileno"] = "*please enter valid Phone No.";
            }
        }

        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "*Please enter your password."
        }

        if(typeof fields["password"] !== "undefined"){
            if(!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
                formIsValid = false;
                errors["password"] = "*please enter valid and strong password.";
            }
        }

        this.setState({
            errors:errors
        });

        return formIsValid;
    }
    render(){
        return(
            <>
             <h6>New Registration</h6>
            
                        <form method="post" name="userRegistrationForm" className="form-reg">
                                <tr>
                                    Name:<td><input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} placeholder="Enter your name"/></td> 
                                    <div>{this.state.errors.username}</div>
                                </tr>
                                <tr>
                                    Email-id:<td><input type="email" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} placeholder="Enter your Email Address"/></td>
                                    <div>{this.state.errors.emailid}</div>
                                </tr>
                                <tr>
                                    Phone No:<td><input type="number" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} placeholder="Phone number" pattern="[6-9]{1}[0-9]{9}" /></td>
                                    <div>{this.state.errors.mobileno}</div>
                                </tr>
                                <tr>
                                    Password:<td><input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder="Enter your Password"/></td>
                                    <div>{this.state.errors.password}</div>
                                </tr>
                                <tr>
                                    Gender: 
                                    <td><input type="radio" name="r1" value="Male"/>Male
                                        <input type="radio" name="r1" value="Female"/>Female 
                                        <input type="radio" name="r1" value="Other"/>Other </td>
                                </tr> 
                                <tr>
                                    Address:
                                    <td><textarea cols="45" rows="4" placeholder="Address..."/> </td>
                                </tr>
                                <tr>
                                    Favourite place:
                                    <td><select>
                                            <option value=" ">Select Here</option>
                                            <option value="dandeli">Dandeli</option>
                                            <option value="goa">Goa</option>
                                            <option value="ladakh">Ladakh</option>
                                            <option value="kerala">Kerala</option>
                                            <option value="northeast">North East</option>
                                            <option value="manali">Manali</option>
                                            <option value="meghalaya">Meghalaya</option>
                                        </select>
                                    </td>
                                </tr>
                                <Link to="/login"><button type="submit" className="regform-btn" onSubmit={this.submituserRegistrationForm}>Register</button></Link>  
                        </form>
            </>
        )
    }
}


