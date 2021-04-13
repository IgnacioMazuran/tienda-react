import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directorio.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorioSecciones } from "../../redux/directorio/directorio.selectors";

const Directorio = ({secciones}) => {
        return(
            <div className='menu-directorio'>
               { 
               secciones.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
               ))
               }
            </div>

        )
    
}

const mapStateToProps = createStructuredSelector({
  secciones: selectDirectorioSecciones
});


export default connect(mapStateToProps)(Directorio);