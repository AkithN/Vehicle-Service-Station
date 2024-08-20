import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Expertsheader.css';

const ExpertsHeader = () => {
    return (
        <div className='experts-header-container'>
            <Card className="experts-card">
                <CardContent>
                    <Typography variant="h5" component="div" className="experts-card-title">
                        <h2>EXPERT VEHICLE REPAIR SERVICES</h2>
                    </Typography>
                    <Typography variant="body2" className="experts-card-content">
                        <p>Trust our expert vehicle repair services to keep your car running smoothly. Our team of highly skilled technicians is trained to handle all types of repairs, from minor fixes to major overhauls. We use state-of-the-art diagnostic tools to accurately identify issues and provide efficient solutions. Whether it’s engine repairs, brake replacements, or electrical system troubleshooting, our experts ensure your vehicle is in top condition. We pride ourselves on delivering high-quality service, using only genuine parts, and maintaining a commitment to customer satisfaction. Visit us for reliable, professional vehicle repair services you can count on.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default ExpertsHeader;
