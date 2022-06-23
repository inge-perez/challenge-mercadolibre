import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import shipping from '../../assets/ic_shipping.png'
import BreadcrumbBar from '../../shared/BreadcrumbBar';
import ItemResult from './components/ItemResult';
import useSiteResultsItems from './hooks/useSiteResultsItems';
import './siteResultsItems.scss'


const SiteItems = () => {

    const { data } = useSiteResultsItems();

    return (
        <div className='results-container'>
            <nav className=''>
                <BreadcrumbBar itemsBreadcrumb={data?.categories || []} />
            </nav>
            {
                data?.items.map((item) =>
                    <ItemResult {...item} />
                )
            }
        </div>
    )
}

export default SiteItems