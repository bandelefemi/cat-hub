import React from "react";
import Header from "./header";
import Cats from "./cats";
import Test from './test'
import _ from 'lodash'

export default function App(){

    const [catData, setCatData] = React.useState()
    // const [catImage, setCatImage] = React.useState()
    const [error, setError] = React.useState(null)

    React.useEffect(()=> {
        fetchData()
    }, [])


    function fetchData(){
        fetch("https://api.thecatapi.com/v1/breeds")

        .then((response)=> {
            if (!response.ok) {
                throw new Error(`this is an http error: the status is ${response.status}`)
            } 
            return response.json()
        })

        .then((data) => createObjectArray(data))
        .then((objArray) => {
            setError(null)
            setCatData(objArray)
        })
    }


    function createObjectArray(array){
        return (
            array && array.map((items)=> {
                return {
                    ...items,
                    id: items.id,
                    name: items.name,
                    origin: items.origin,
                    image: items.reference_image_id,
                    temperament: items.temperament,
                    description: items.description,
                    weight: items.weight.imperial,
                    life_span: items.life_span
                }
            })
        )
    }


    

    const catComponent = catData && 
    catData.map((item)=> {
        return (
            <Cats 
                key= {item.id}
                id= {item.id}
                name={item.name}
                image= {item.image}
                origin= {item.origin}
                temperament = {item.temperament}
                description = {item.description}
                weight = {item.weight}
                life_span = {item.life_span}
                />
        )
    })

    
    


    return(
        <div>
            <Header />

            {/* <div className="cat-container"> */}
            {catComponent}
            {/* </div> */}

            <button 
            onClick={()=> {window.scrollTo({top: 0, left: 0, behaviour: "smooth"})}}
            style={{
                position: 'fixed',
                padding: '1rem 2rem',
                fontSize: '20px',
                bottom: '40px',
                right: '40px',
                backgroundColor: '#0C9',
                color: '#fff',
                textAlign: 'center',
              }}> scroll to top
            </button>
            
        </div>
    )
}