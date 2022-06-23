import React from 'react'
import styled from 'styled-components';

const BreadcrumbBar = (props: { itemsBreadcrumb: string[] }) => {
    return (
        <Breadcrumb className="breadcrumb">
            {props.itemsBreadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && '>'}
                    <span className='segment'>{item}</span>
                </React.Fragment>
            ))}
        </Breadcrumb>
    )
}

const Breadcrumb = styled.span`
display: inline-flex;
gap: 8px;
padding: 16px 0;
color: #999;
font-size: 14px;
span{
    cursor: pointer;
}
`;


export default BreadcrumbBar