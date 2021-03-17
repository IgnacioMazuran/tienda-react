import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Las contraseñas no coinciden");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user,{displayName});
           this.setState(
            {displayName: '',
            email: '',
            password: '',
            confirmPassword: ''}
           )
        } catch(error){
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value} = event.target;
        this.setState({[name]: value});
    };

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>No tengo una cuenta</h2>
                <span>Registrarse con email y contraseña</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Nombre'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Contraseña'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirmar contraseña'
            required
          />
          <CustomButton type='submit'>REGISTRARSE</CustomButton>
        </form>
            </div>
        )
    }
}
export default SignUp;