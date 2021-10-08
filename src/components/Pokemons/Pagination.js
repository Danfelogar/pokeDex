import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Pagination.css';

export const Pagination = (props) => {

    const { onLeftClick, onRightClick, page,  totalPages } = props;

    return (
        <div className="pagination">
            <button onClick={ onLeftClick }>
            <FontAwesomeIcon icon={ faArrowLeft } />
            </button>
            <div> {page} de {totalPages} </div>
            <button onClick={ onRightClick } >
            <FontAwesomeIcon icon={ faArrowRight } />
            </button>
        </div>
    )
}
