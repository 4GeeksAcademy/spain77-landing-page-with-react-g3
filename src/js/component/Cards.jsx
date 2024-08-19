import React from 'react';
import PropTypes from 'prop-types';

export const Cards = (props) => {
    return (
        <div className="container d-flex text-center">
            <div className="card m-2" style={{ width: '18rem' }}>
                <img src={props.imageURL} className="card-img-top" alt={props.imageALT} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary">{props.button}</a>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    imageURL: PropTypes.string.isRequired,
    imageALT: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};
