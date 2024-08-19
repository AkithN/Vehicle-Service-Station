import React from 'react';
import './Experts.css';
import experts1 from '../../assets/expert-1.jpg';
import experts2 from '../../assets/expert-2.jpg';
import experts3 from '../../assets/expert-3.jpg';
import experts4 from '../../assets/expert-4.jpg';
import experts5 from '../../assets/expert-5.jpg';
import experts6 from '../../assets/expert-6.png';

const experts = [
    { id: 1, name: 'Will Smith', img: experts1 },
    { id: 2, name: 'Rock', img: experts2 },
    { id: 3, name: 'Chris', img: experts3 },
    { id: 4, name: 'Merara', img: experts4 },
    { id: 5, name: 'Jibon', img: experts5 },
    { id: 6, name: 'Smith', img: experts6 }
];

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>
            <div className='row'>
                {experts.map(expert => (
                    <Expert key={expert.id} expert={expert} />
                ))}
            </div>
        </div>
    );
};

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="g-5 gx-5 mb-5 col-sm-12 col-md-6 col-lg-4 text-center">
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top w-100" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a href="/expertsDetails" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experts;
