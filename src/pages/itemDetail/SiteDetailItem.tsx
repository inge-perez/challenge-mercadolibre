import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Detail } from './domain/Detail';
import { HttpDetailItemService } from './infrastructure/HttpDetailItemService';
import './item.scss'


const SiteDetailItems = () => {

    const { itemId = "" } = useParams();

    const httpResultService: HttpDetailItemService = new HttpDetailItemService();

    const [allServices, setAllServices] = useState<Detail>();

    async function _load(itemId: string | "") {
        try {
            const services = await httpResultService.getItemDetail(itemId);
            setAllServices(services);
        } finally {

        }
    }

    useEffect(() => {
        _load(itemId)
    }, [itemId]);

    return (
        <div className='results-container'>
            <div className='container-item' id={allServices?.id}>
                <div className='container-item-img'>
                    <img className='img-item' alt="" src="http://http2.mlstatic.com/D_994609-MLA47871010530_102021-O.jpg"></img>
                </div>
                <div className='container-item-detail'>
                    <div className=''>
                        <span className='quantity'>Nuevo - 234 vendidos</span>
                    </div>
                    <div>
                        <h1>Deco Reverse Sombrero Oxford</h1>
                    </div>
                    <div>
                        <span className='price'>$ 1.980 {allServices?.id}</span>
                    </div>
                    <button className='btn-primary'>Comprar</button>
                </div>
                <div className='container-item-description'>
                    <h2>Descripción del producto</h2>
                    <p className='description'>* NO REALICE PAGOS POR FUERA DE MERCADOLIBRE , Desde otras cuentas personas inescrupulosas usan nuestra reputación para solicitar consignaciones con DATOS FALSOS , Indicando un precio inferior al aquí publicado, ESTO ES FALSO, Nosotros recibiremos su pago por MERCADOLIBRE , ANTE CUALQUIER DUDA POR FAVOR PREGUNTE EN ESTA PUBLICACION Y solo haga caso a las respuestas de ESTA PUBLICACION.</p>
                </div>
            </div>

        </div>
    )
}

export default SiteDetailItems