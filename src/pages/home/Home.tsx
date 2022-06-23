import React from 'react'
import banner from '../../assets/banner.webp';
import './home.scss'

const Home = () => {

  return (
    <div className='container-home'>
      <section>
        <img src={banner} alt="banner" />
      </section>

      <section>
        <div className="container-types">
          <div className="container-payment-types">
            <div className="payment-type">
              <a className="payment-type-icon" href="#" data-title="Medios de pago">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" alt="Hasta 48 cuotas" />
              </a>
              <div className="payment-data-title">Hasta 48 cuotas</div>
              <div className="payment-data-subtitle">
                <a href="#" data-title="Medios de pago" aria-label="Hasta 48 cuotas, Ver más">Ver más</a>
              </div>
            </div>
            <div className="payment-type">
              <a className="payment-type-icon" href="#" data-title="Medios de pago">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/transfer.svg" alt="Transferencia desde tu banco" />
              </a>
              <div className="payment-data-title">Transferencia desde tu banco</div>
              <div className="payment-data-subtitle">
                <a href="#" data-title="Medios de pago" aria-label="Transferencia desde tu banco, Ver más">Ver más</a>
              </div>
            </div>
            <div className="payment-type">
              <a className="payment-type-icon" href="#" data-title="Medios de pago">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" alt="Paga en efectivo" />
              </a>
              <div className="payment-data-title">Paga en efectivo</div>
              <div className="payment-data-subtitle">
                <a href="#" data-title="Medios de pago" aria-label="Paga en efectivo, Ver más">Ver más</a>
              </div>
            </div>
            <div className="payment-type">
              <a className="payment-type-icon" href="#" data-title="Medios de pago">
                <img decoding="async" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" alt="Más medios de pago" />
              </a>
              <div className="payment-data-title">Más medios de pago</div>
              <div className="payment-data-subtitle">
                <a href="#" data-title="Medios de pago" aria-label="Más medios de pago, Ver todos">Ver todos</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home