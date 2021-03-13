import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({ [name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>Ya tengo una cuenta</h2>
                <span>Registrarse con email y contraseña</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required/>
                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required/>
                   
                    <CustomButton type="submit">Iniciar Sesión</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Iniciar Sesión con Google</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;