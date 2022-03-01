import React from 'react'
import Product from "./Product";

interface IProduct{
    products: any;
}

interface IData{
    id : number; 
    title: String; 
    price: number; 
    description: String; 
    category: String; 
    image: any;
}

 
function ProductFeed({ products }:IProduct) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols">
     
        {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image}: IData) => (
        <Product 
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}

        />
        ))}

        <img 
        className="md:col-span-full"
        src="./alexa.jpg"
        alt="" />

        <div className="md:col-span-2">
            {products
            .slice(4, 5)
            .map(({ id, title, price, description, category, image}: IData) => (
                <Product 
                key={id} 
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image} />
            ))            
            }
        </div>

        {products
            .slice(5, products.length)
            .map(({ id, title, price, description, category, image}: IData) => (
                <Product 
                key={id} 
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image} />
            ))            
            }

    </div>
  )
}

export default ProductFeed