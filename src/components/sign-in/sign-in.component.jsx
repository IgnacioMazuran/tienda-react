import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import Swal from 'sweetalert2'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email,password} = this.state; //deestructure

    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
      Swal.fire({
        icon: 'success',
        title: 'Sesión iniciada con éxito'
      });

    } catch(error){
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Contraseña incorrecta!',
      })
    }

    
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Ya tengo una cuenta</h2>
        <span>Registrarse con email y contraseña</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
            <div className='buttons'><CustomButton type="submit">Iniciar Sesión</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Iniciar Sesión con Google
            </CustomButton> </div>
            
          
        </form>
      </div>
    );
  }
}
export default SignIn;
