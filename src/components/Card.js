import React from 'react'
import './styles/card.css'
const backgroundImg = 'https://firebasestorage.googleapis.com/v0/b/firstproyectreactjs.appspot.com/o/circles.png?alt=media&token=cfc10bcb-f149-4f53-802a-121775b1783c'
const emptyImg = 'https://firebasestorage.googleapis.com/v0/b/firstproyectreactjs.appspot.com/o/default-image-fpnp.png?alt=media&token=38f7739b-b2b1-4365-b4a3-18bf3170f13f'

const Card = ({_id, title, description, img, leftColor, rightColor},eliminar) => {
    return (
        <div className="card mx-auto Fitness-Card mt-5" 
            style={{
                backgroundImage: `url(${backgroundImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
            }}
            data-id = {_id}>
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={img || emptyImg} alt="..." className="float-right w-50 h-100"/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card