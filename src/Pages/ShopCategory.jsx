import React, { useContext } from 'react';
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assetes/dropdown_icon.png'
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shop-category-banner' src={props.banner} alt="" />
            <div className='shop-category-indexsort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shop-category-sort'>
                    Sort By <img src={dropdown_icon} alt="" />

                </div>

            </div>

            <div className='shop-category-products'>
                {
                    all_product.map((item, idx) => {
                        if (props.category === item.category) {
                            return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                        }
                        else {
                            return null
                        }

                    })
                }
            </div>

            <div className='shopcategory-loadmore'>
                Explore more


            </div>


        </div>
    );
};

export default ShopCategory;