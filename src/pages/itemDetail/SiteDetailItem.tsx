import BreadcrumbBar from '../../shared/BreadcrumbBar';
import useItemDetail from './hooks/useItemDetail';
import './item.scss'


const SiteDetailItems = () => {

    const { dataItem } = useItemDetail();

    return (
        <div className='results-container'>
            <nav className=''>
                <BreadcrumbBar itemsBreadcrumb={dataItem?.categories || []} />
            </nav>
            <div className='container-item' id={dataItem?.item.id}>
                <div className='container-item-img'>
                    <img className='img-item' alt="Descripcion de la imagen detalle" src={dataItem?.item.picture}></img>
                </div>
                <div className='container-item-detail'>
                    <div className=''>
                        <span className='quantity'>{dataItem?.item.condition} - {dataItem?.item.sold_quantity} vendidos</span>
                    </div>
                    <div>
                        <h1>{dataItem?.item.title}</h1>
                    </div>
                    <div>
                        <span className='price'>$ {dataItem?.price.amount}</span>
                    </div>
                    <button className='btn-primary'>Comprar</button>
                </div>
                <div className='container-item-description'>
                    <h2>Descripción del producto</h2>
                    <p className='description'>{dataItem?.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SiteDetailItems