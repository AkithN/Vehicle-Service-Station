import React from 'react';
import './About.css';
import team1 from '../../assets/akith.jpg';
import team2 from '../../assets/sandani.jpg';
import team3 from '../../assets/diluka.jpg';
import team4 from '../../assets/oresha.jpg';
import aboutus from '../../assets/cr1.png';
import vision from '../../assets/vision.jpg';
import mission from '../../assets/mission.jpg';
import values from '../../assets/team.jpg';

const teamData = [
    { id: 1, name: 'Akith Nimpura', description: 'Full Stack Developer', img: team1 },
    { id: 2, name: 'Sandani Rashmika', description: 'QA Enginner', img: team2 },
    { id: 3, name: 'Diluka Theekshana', description: 'Full Stack Developer', img: team3 },
    { id: 4, name: 'Oresha Maduwanthi', description: 'Full Stack Developer', img: team4 },
];

const About = () => {
    return (
        <>
            <section className='about-section'>
                <div className='about-container'>
                    <h3>About Us</h3>
                    <div className="guest-aboutus">
                        <p>Welcome to CarCraft, the ultimate hub for connecting vehicle owners with trusted and expert service providers. Our mission is to make vehicle maintenance and repairs as simple and stress-free as possible by providing a centralized platform that bridges the gap between you and the best service providers in the industry. At CarCraft, we are committed to quality and reliability, which is why we meticulously vet each service provider to ensure they meet our high standards. This means that every service listed on our platform is guaranteed to be of the highest quality.
                            <br />
                            CarCraft is designed with user convenience in mind. Our intuitive platform makes it easy for vehicle owners to book appointments, select specific services, and receive accurate estimates quickly and effortlessly. Whether you need routine maintenance like oil changes and tire rotations, major repairs, or custom modifications, CarCraft offers a comprehensive range of services to cater to all your vehicle care needs. Our goal is to provide a hassle-free experience that ensures your vehicle is always in top condition. With CarCraft, you can trust that your vehicle is in good hands, making vehicle maintenance and repairs more convenient and reliable than ever before.</p>
                        <img src={aboutus} alt='aboutus' />
                    </div>

                    <h3>Our Vision</h3>
                    <div className="guest-vision">
                        <img src={vision} alt='vision' />
                        <p>To drive innovation and transformation in the auto care industry, creating a future where quality auto services are accessible to all through trusted partnerships. We envision a world where every car owner has access to reliable and expert mechanics who can provide not only solutions but also peace of mind. Through our commitment to excellence, we aim to elevate industry standards, foster long-term relationships, and set new benchmarks in customer satisfaction. By leading the way in innovation, we aspire to be the catalyst that redefines the auto care experience across Sri Lanka, ultimately shaping a more connected, efficient, and sustainable future for all.</p>
                    </div>

                    <h3>Our Mission</h3>
                    <div className="guest-mission">
                        <p>Our mission is to be the premier auto care hub in Sri Lanka, built on the pillars of trust and reliability. We aim to establish a strong foundation of collaboration between car owners and service providers, ensuring that every interaction on our platform is marked by transparency, care, and efficiency. By fostering trust among all stakeholders—car owners, mechanics, and garage partners—we are creating a vibrant and reliable auto care ecosystem.</p>
                        <img src={mission} alt='mission' />
                    </div>

                    <h3>Our Values</h3>
                    <div className="guest-values">
                        <img src={values} alt='values' />
                        <p>At CarCraft, we uphold the values of reliability, integrity, care, innovation, and sustainability in everything we do. We strive to exemplify reliability by building and maintaining trust among all key stakeholders in the auto care industry. Through our unwavering commitment to integrity, we ensure fairness and transparency in every aspect of auto care. We believe in treating every stakeholder—whether a car owner or a service provider—with due care and respect, fostering a positive and inclusive environment. Leading with innovation, we are dedicated to transforming the auto care industry through novel solutions and cutting-edge advancements. Finally, our focus on sustainability drives us to share the benefits of our growth with society and nature, ensuring that our impact is not only positive for our customers but for the environment as well.</p>
                    </div>
                </div>
            </section >
            <section className='team-section'>
                <div className='team-container'>
                    <h1>Meet With Our Team Members</h1>
                    <div className="team-list">
                        {teamData.map((member) => (
                            <div key={member.id} className="card-team-content">
                                <img src={member.img} className="card-team-image" alt={member.name} />
                                <div className="card-team-body">
                                    <h5 className="card-team-title">{member.name}</h5>
                                    <p className="card-team-description">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
