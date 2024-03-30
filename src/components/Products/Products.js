import Home from "../Home/Home"

const Products = () => {

    let allProducts = [{
        "id": 1,
        "product_name": "Belinda",
        "product_price": 3993,
        "product_img": '/public/abiento-black1.jpg'
    }, {
        "id": 2,
        "product_name": "Sada",
        "product_price": 2032,
        "product_img": '/public/abiento-black1.jpg'
    }, {
        "id": 3,
        "product_name": "Wynn",
        "product_price": 7092,
        "product_img": '/public/abiento-black1.jpg'
    }, {
        "id": 4,
        "product_name": "Norman",
        "product_price": 3803,
        "product_img": '/public/abiento-black1.jpg'
    }, 
    // {
    //     "id": 5,
    //     "product_name": "Charlie",
    //     "product_price": 3324,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, 
    // {
    //     "id": 6,
    //     "product_name": "Iain",
    //     "product_price": 2969,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 7,
    //     "product_name": "Ophelie",
    //     "product_price": 7647,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 8,
    //     "product_name": "Shae",
    //     "product_price": 5338,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 9,
    //     "product_name": "Barby",
    //     "product_price": 1152,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 10,
    //     "product_name": "Nicolai",
    //     "product_price": 7710,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 11,
    //     "product_name": "Rafaello",
    //     "product_price": 1303,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 12,
    //     "product_name": "Hillier",
    //     "product_price": 3099,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 13,
    //     "product_name": "Oberon",
    //     "product_price": 3181,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 14,
    //     "product_name": "Caz",
    //     "product_price": 5865,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 15,
    //     "product_name": "Jordana",
    //     "product_price": 971,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, 
    // {
    //     "id": 16,
    //     "product_name": "Duffie",
    //     "product_price": 7954,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 17,
    //     "product_name": "Dari",
    //     "product_price": 1862,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 18,
    //     "product_name": "Hynda",
    //     "product_price": 6070,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 19,
    //     "product_name": "Saundra",
    //     "product_price": 3297,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 20,
    //     "product_name": "Maris",
    //     "product_price": 6274,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 21,
    //     "product_name": "Ardisj",
    //     "product_price": 3332,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 22,
    //     "product_name": "Vinita",
    //     "product_price": 7530,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 23,
    //     "product_name": "Raleigh",
    //     "product_price": 1729,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 24,
    //     "product_name": "Kerry",
    //     "product_price": 7756,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 25,
    //     "product_name": "Toni",
    //     "product_price": 1388,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 26,
    //     "product_name": "Barnebas",
    //     "product_price": 7440,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 27,
    //     "product_name": "Aylmer",
    //     "product_price": 2888,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 28,
    //     "product_name": "Niels",
    //     "product_price": 2382,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 29,
    //     "product_name": "Harriot",
    //     "product_price": 6975,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }, {
    //     "id": 30,
    //     "product_name": "Sutherland",
    //     "product_price": 1482,
    //     "product_img": [
    //         {
    //         }
    //     ]
    // }
]

    return (
        <div>
            <Home products={allProducts} />
        </div>
    )
}

export default Products
