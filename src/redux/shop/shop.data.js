const SHOP_DATA = [
    {
      id: 1,
      titulo: 'Gorras',
      routeName: 'gorras',
      items: [
        {
          id: 1,
          nombre: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          precio: 25
        },
        {
          id: 2,
          nombre: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          precio: 18
        },
        {
          id: 3,
          nombre: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          precio: 35
        },
        {
          id: 4,
          nombre: 'Grey Brim',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          precio: 25
        },
        {
          id: 5,
          nombre: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          precio: 18
        },
        {
          id: 6,
          nombre: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          precio: 14
        },
        {
          id: 7,
          nombre: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          precio: 18
        },
        {
          id: 8,
          nombre: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          precio: 14
        },
        {
          id: 9,
          nombre: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          precio: 16
        }
      ]
    },
    {
      id: 2,
      titulo: 'Zapatillas',
      routeName: 'zapatillas',
      items: [
        {
          id: 10,
          nombre: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          precio: 220
        },
        {
          id: 11,
          nombre: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          precio: 280
        },
        {
          id: 12,
          nombre: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          precio: 110
        },
        {
          id: 13,
          nombre: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          precio: 160
        },
        {
          id: 14,
          nombre: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          precio: 160
        },
        {
          id: 15,
          nombre: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          precio: 160
        },
        {
          id: 16,
          nombre: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          precio: 190
        },
        {
          id: 17,
          nombre: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          precio: 200
        }
      ]
    },
    {
      id: 3,
      titulo: 'Camperas',
      routeName: 'camperas',
      items: [
        {
          id: 18,
          nombre: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          precio: 125
        },
        {
          id: 19,
          nombre: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          precio: 90
        },
        {
          id: 20,
          nombre: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          precio: 90
        },
        {
          id: 21,
          nombre: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          precio: 165
        },
        {
          id: 22,
          nombre: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          precio: 185
        }
      ]
    },
    {
      id: 4,
      titulo: 'Mujeres',
      routeName: 'mujeres',
      items: [
        {
          id: 23,
          nombre: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          precio: 25
        },
        {
          id: 24,
          nombre: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          precio: 20
        },
        {
          id: 25,
          nombre: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          precio: 80
        },
        {
          id: 26,
          nombre: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          precio: 80
        },
        {
          id: 27,
          nombre: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          precio: 45
        },
        {
          id: 28,
          nombre: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          precio: 135
        },
        {
          id: 29,
          nombre: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          precio: 20
        }
      ]
    },
    {
      id: 5,
      titulo: 'Hombres',
      routeName: 'hombres',
      items: [
        {
          id: 30,
          nombre: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          precio: 325
        },
        {
          id: 31,
          nombre: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          precio: 20
        },
        {
          id: 32,
          nombre: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          precio: 25
        },
        {
          id: 33,
          nombre: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          precio: 25
        },
        {
          id: 34,
          nombre: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          nombre: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          precio: 25
        }
      ]
    }
  ]
  export default SHOP_DATA;