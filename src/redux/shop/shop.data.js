const SHOP_DATA = {
    gorras : {
      id: 1,
      titulo: 'Gorras',
      routeName: 'gorras',
      items: [
        {
          id: 1,
          nombre: 'Brim Marrón',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          precio: 350
        },
        {
          id: 2,
          nombre: 'Beanie Azul',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          precio: 1100
        },
        {
          id: 3,
          nombre: 'Vaquero Marrón',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          precio: 560
        },
        {
          id: 4,
          nombre: 'Brim Gris',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          precio: 25
        },
        {
          id: 5,
          nombre: 'Beanie Verde',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          precio: 1100
        },
        {
          id: 6,
          nombre: 'Gorra Palmera',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          precio: 700
        },
        {
          id: 7,
          nombre: 'Beanie Rojo',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          precio: 1100
        },
        {
          id: 8,
          nombre: 'Gorra Wolf',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          precio: 700
        },
        {
          id: 9,
          nombre: 'Gorra de Béisbol Azul',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          precio: 800
        }
      ]
    },
    zapatillas :{
      id: 2,
      titulo: 'Zapatillas',
      routeName: 'zapatillas',
      items: [
        {
          id: 10,
          nombre: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          precio: 15000
        },
        {
          id: 11,
          nombre: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          precio: 52000
        },
        {
          id: 12,
          nombre: 'Converse Negras',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          precio: 7999
        },
        {
          id: 13,
          nombre: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          precio: 49900
        },
        {
          id: 14,
          nombre: 'Nike High Tops Rojas',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          precio: 22999
        },
        {
          id: 15,
          nombre: 'Nike High Tops Marrón',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          precio: 22999
        },
        {
          id: 16,
          nombre: 'Air Jordan Edición Limitadas',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          precio: 56999
        },
        {
          id: 17,
          nombre: 'Timberlands Marrón',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          precio: 16800
        }
      ]
    },
    camperas :{
      id: 3,
      titulo: 'Camperas',
      routeName: 'camperas',
      items: [
        {
          id: 18,
          nombre: 'Campera Jean Negra',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          precio: 4500
        },
        {
          id: 19,
          nombre: 'Campera Jean Azul',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          precio: 4500
        },
        {
          id: 20,
          nombre: 'Campera Jean Gris',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          precio: 4500
        },
        {
          id: 21,
          nombre: 'Campera Shearling Marrón',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          precio: 65625
        },
        {
          id: 22,
          nombre: 'Piloto Trench Marrón',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          precio: 5687
        }
      ]
    },
    mujeres :{
      id: 4,
      titulo: 'Mujeres',
      routeName: 'mujeres',
      items: [
        {
          id: 23,
          nombre: 'Tanktop Azul',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          precio: 2699
        },
        {
          id: 24,
          nombre: 'Blusa Floral',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          precio: 1650
        },
        {
          id: 25,
          nombre: 'Vestido Floral',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          precio: 4800
        },
        {
          id: 26,
          nombre: 'Vestido de Puntos Rojos',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          precio: 4800
        },
        {
          id: 27,
          nombre: 'Suéter Rayado',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          precio: 1700
        },
        {
          id: 28,
          nombre: 'Conjunto Amarillo',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          precio: 3000
        },
        {
          id: 29,
          nombre: 'Blusa Blanca',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          precio: 1650
        }
      ]
    },
    hombres :{
      id: 5,
      titulo: 'Hombres',
      routeName: 'hombres',
      items: [
        {
          id: 30,
          nombre: 'Chaleco Camo Marrón',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          precio: 2600
        },
        {
          id: 31,
          nombre: 'Camisa Floral',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          precio: 1599
        },
        {
          id: 32,
          nombre: 'Manga Larga Blanco & Negro',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          precio: 850
        },
        {
          id: 33,
          nombre: 'Camisa Rosa',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          precio: 1500
        },
        {
          id: 34,
          nombre: 'Camisa Jean Manga Larga',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 1997
        },
        {
          id: 35,
          nombre: 'Camisa Vino Tinto',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          precio: 1800
        }
      ]
    }
}
  export default SHOP_DATA;