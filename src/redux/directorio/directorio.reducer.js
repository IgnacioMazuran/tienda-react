const INITIAL_STATE = {
    secciones: [
    {
      titulo: 'Gorras',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/gorras'
    },
    {
      titulo: 'Remeras',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/remeras'
    },
    {
        titulo: 'Zapatillas',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      
      id: 3,
      linkUrl: 'shop/zapatillas'
    },
    {
        titulo: 'Mujeres',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      
      size: 'large',
      id: 4,
      linkUrl: 'shop/mujeres'
    },
    {
        titulo: 'Hombres',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      
      size: 'large',
      id: 5,
      linkUrl: 'shop/hombres'
    }
  ]}

  const directorioReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;
    }
  };

  export default directorioReducer;