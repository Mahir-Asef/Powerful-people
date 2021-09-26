import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import People from '../Peoples/People'
import './Forbes.css'

const Forbes = () => {
    const [peoples,setPeoples]=useState([])
    const [cart,setCart]=useState([]);

    // ==============BUTTON EVENT PART=================

    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
     }

    //  ===================DATA FETCHING PART=============== 

    useEffect(()=>{
        fetch('rich.JSON')
        .then(res=>res.json())
        .then(data=>setPeoples(data))
    },[])


    return (
        <div className='forbes'>
         <div className="forbes-card">
                {
                    peoples.map(people=><People 
                        key={people.id} 
                        people={people}
                        handleAddToCart={handleAddToCart}></People>)
                }
        </div>
        <div>
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Forbes;