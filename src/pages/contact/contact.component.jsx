import React from 'react';
import './contact.styles.scss';
import back from '../../assets/back.jpg';
import inBoton from '../../assets/inBoton.png';
import Github from '../../assets/Github.png';
import gmail from '../../assets/gmail.png';
import telefono from '../../assets/telefono.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Contacto = () => (

    <div>

        <img className='background' src={back} alt="" />
        <div class="card">
            <img src={inBoton} alt="Avatar" />
            <div class="container">
                <h4><b>LinkedIn</b></h4>
                <div className='buttons'>
                    <Button variant="primary" className="btn-primary" 
                    role="button"
                    href="https://www.linkedin.com/in/ignacio-mazuran/">
                         Ver Perfil 
                    </Button> 
                </div>
            </div>
        </div>
        <div class="card">
            <img src={gmail} alt="Avatar" />
            <div class="container">
                <h4><b>Email</b></h4>
                <p>ignaciomazuran12@gmail.com</p>
            </div>
        </div>
        <div class="card">
            <img src={telefono} alt="Avatar" />
            <div class="container">
                <h4><b>Teléfono</b></h4>
                <p>261 6658593</p>
            </div>
        </div>
        <div class="card">
            <img src={Github} alt="Avatar" />
            <div class="container">
                <h4><b>Repositorio</b></h4>
                <div className='buttons' >
                    
                <Button  variant="primary" className="btn-primary" role="button" href="https://github.com/IgnacioMazuran">Ver Proyectos</Button> 
                   
                </div>
            </div>
        </div>

    </div>
    )

export default Contacto;