import React from 'react';
import './NewCollection.css'
import new_collection from '../Assetes/new_collections'
import Item from '../Item/Item';
const NewCollection = () => {
    return (
        <div className='newcollections'>
            <h1>New Collection</h1>
            <hr />
            <div className='collections'>
                {
                    new_collection.map((item, idx) => {
                        return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>

                    })
                }

            </div>

        </div>
    );
};

export default NewCollection;