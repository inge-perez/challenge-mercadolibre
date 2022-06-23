import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../types'
import shipping from '../../../assets/ic_shipping.png'

const ItemResult = (item: Item) => {

    const construirLink = (itemId: string | undefined) => `/items/${itemId}`

    return (
        <div className='results-container-item' id={item.id} key={item.id}>
            <div className='containter-img'>
                <Link to={construirLink(item.id)}>
                    <img className='img-item' alt="Imagen resultado de la busqueda" src={item.picture}></img>
                </Link>
            </div>
            <div className='containter-description'>
                <div className='description-price'>
                    <h1 className='price'>$ {item.price.amount}</h1>
                    {item.free_shipping && <img className='img-item' alt="" src={shipping}></img>}
                </div>
                <div>
                    <Link to={construirLink(item.id)}>
                        <h3 className='description'>{item.title}</h3>
                        <br />
                        <span className='condition'>{item.condition}</span>
                    </Link>
                </div>
            </div>
            <div className='containter-address'>
                <span className='city'>{item.address}</span>
            </div>
        </div>
    )
}

export default ItemResult