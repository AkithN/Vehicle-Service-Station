import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import './GuestNews.css';
import image1 from '../../assets/News1.jpg';
import image2 from '../../assets/News2.jpg';
import image3 from '../../assets/News3.jpg';

const GuestNews = () => {

    const newsItems = [
        {
            title: 'Breaking News: React 18 Released',
            description: 'React 18 introduces new features and improvements to enhance the user experience.',
            image: image1,
        },
        {
            title: 'Event: React Conference 2024',
            description: 'Join us for a comprehensive conference featuring talks and workshops on React.',
            image: image2,
        },
        {
            title: 'New Update: Material UI v5',
            description: 'Material UI has released a new version with enhanced components and theming capabilities.',
            image: image3,
        },
    ];

    return (
        <Container className="Guest-News-container">
            <Typography variant="h2" className="Guest-News-heading" gutterBottom>
                News
            </Typography>
            <Grid container spacing={6}>
                {newsItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="Guest-News-card" sx={{ maxWidth: 345 }}>
                            {item.image && <CardMedia component="img" className="Guest-News-card-media" image={item.image} alt={item.title} />}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className="Guest-News-card-title">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" className="Guest-News-card-description">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default GuestNews;
