import { createSelector } from 'reselect';

const selectDirectorio = state => state.directorio;

export const selectDirectorioSecciones = createSelector(
    [selectDirectorio],
    (directorio) => directorio.secciones
);