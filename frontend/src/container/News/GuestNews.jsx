import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import './GuestNews.css';

const GuestNews = () => {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        // Fetch news data from the backend
        axios.get('http://localhost:5000/api/news')
            .then(response => {
                setNewsItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
            });
    }, []);

    return (
        <Container className="Guest-News-container">
            <Typography variant="h2" className="Guest-News-heading" gutterBottom>
                News
            </Typography>
            <Grid container spacing={6}>
                {newsItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.newsId}>
                        <Card className="Guest-News-card" sx={{ maxWidth: 345 }}>
                            {item.image && (
                                <CardMedia
                                    component="img"
                                    className="Guest-News-card-media"
                                    image={`http://localhost:5000${item.image}`}
                                    alt={item.topic}
                                />
                            )}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className="Guest-News-card-title">
                                    {item.topic}
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
