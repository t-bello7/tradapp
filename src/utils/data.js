const ProductsData = [
    {
        id:1,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars',
        askprice: 34,
        bidprice: 35,
    },

    {
        id:2,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars',
        askprice: 34,
        bidprice: 35,
    },

    {
        id:3,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars',
        askprice: 34,
        bidprice: 35,
    },

    {
        id: 4,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars',
        askprice: 34,
        bidprice: 35,
    },

    {
        id: 5,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars',
        askprice: 34,
        bidprice: 35,
    },
    {
        id: 6,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars',
        askprice: 34,
        bidprice: 35,
    }
]

export function getProducts() {
    return  ProductsData;
}

export function getProduct(id){
    return ProductsData.find(
        product=> product.id === id
    )
}