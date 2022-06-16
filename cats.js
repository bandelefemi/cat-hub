import React from "react";

export default function Cats(props) {

    return (
        <div className='cat-container'>
            
            <div className="cat-data">

                <div className="cat-image">

                    <img src={`https://cdn2.thecatapi.com/images/${props.image}.jpg`} alt='' />

                </div>

                <div className="cat-info">

                    <p className="cat-breed">
                        {props.name}
                    </p>
                    <p className="origin">{props.origin}</p>
                    <p>Temperament: {props.temperament}</p>
                    <p>Life Span: {props.life_span} years</p>
                    <p>Weight: {props.weight} kg</p>
                    <p>Description</p>
                    <p>{props.description}</p>

                </div>

            </div>
           
        </div>
    )
}

