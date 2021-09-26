import React from 'react';
import './People.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const People = (props) => {

    // ==============DESTRUCTURING PART==================

        const {image,name,age,Profession,annualIncome,}=props.people;
    return (
            <div className="card-align">
                <div style={{textAlign:'center' ,marginTop:'5px'}}>
                <img  className="image-class" src={image} alt="" srcset="" />
                </div>
                <div className="card-details">
                <h3>{name}</h3>
                <p> Age   :{age}</p>
                <h5>Profession :{Profession}</h5>
                <h5>Annual Income :${annualIncome}</h5>
                </div>
                <button className="card-button" onClick={()=>props.handleAddToCart(props.people)}><FontAwesomeIcon icon={faUser} /> Select</button>
            </div>
    );
};

export default People;