import React from 'react';
import './RelatedProducts.css'
import data_product from '../Assetes/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className='relatedproducrs-item'>
                {data_product.map((item, idx) => {
                    return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>

                })}

            </div>

        </div>
    );
};

export default RelatedProducts;