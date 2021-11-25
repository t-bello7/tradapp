const ProductsData = [
    {
        id:1,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars'
    },

    {
        id:2,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars'
    },

    {
        id:3,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars'
    },

    {
        id: 4,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars'
    },

    {
        id: 5,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars'
    },
    {
        id: 6,
        name:'Jagusa',
        image: 'cheverolet.jpg',
        description: 'A good car for sale',
        category: 'cars'
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