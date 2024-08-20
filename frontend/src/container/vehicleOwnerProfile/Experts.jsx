import React from 'react';
import './Experts.css';
import expert1 from '../../assets/expert-1.jpg';
import expert2 from '../../assets/expert-2.jpg';
import expert3 from '../../assets/expert-3.jpg';
import expert4 from '../../assets/expert-4.jpg';
import expert5 from '../../assets/expert-5.jpg';
import expert6 from '../../assets/expert-6.png';

const expertData = [
    { id: 1, name: 'Will Smith', img: expert1 },
    { id: 2, name: 'Rock', img: expert2 },
    { id: 3, name: 'Chris', img: expert3 },
    { id: 4, name: 'Merara', img: expert4 },
    { id: 5, name: 'Jibon', img: expert5 },
    { id: 6, name: 'Smith', img: expert6 }
];

const Experts = () => {
    return (
        <section id='experts' className='experts-container'>
            <h1 className='title text-center margin-top-large'>Our Experts</h1>
            <div className='experts-grid'>
                {expertData.map(expert => (
                    <ExpertCard key={expert.id} expert={expert} />
                ))}
            </div>
        </section>
    );
};

const ExpertCard = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="expert-card">
            <div className="card-content">
                <img src={img} className="card-image" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-description">
                        "Professional expertise in various fields with years of experience."
                    </p>
                    <a href="/expertsDetails" className="card-button">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experts;
