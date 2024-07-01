import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Link from 'next/link';

type BlogPostProps = {
    title: string;
    body: string;
    id: number
};

const BlogPost: React.FC<BlogPostProps> = ({ title, body, id }) => {
    return (

        <Card sx={{ maxWidth: 600, marginBottom: 2, height: "100%", borderRadius: "10px", boxShadow: '0 4px 8px rgba(0,0,0,0.3)', }}>


            <CardContent sx={{ height: "100%", display: 'flex', flexDirection: "column" }}>
                <Typography variant='h6' sx={{ marginBottom: '10px' }} component="h5">
                    {title}
                </Typography>
                <Typography variant="body1">
                    {body}

                </Typography>
                <Typography color='primary' fontSize='18' sx={{ marginTop: 'auto', marginLeft: "auto" }} >
                    <Link className='blogLink' href={`/posts/${id}`} color='primary' style={{ display: 'flex', alignItems: 'center'  }} >
                        <span style={{ marginRight: '4px' }}>Read more</span>
                        <ArrowForwardIosIcon sx={{
                            fontSize: 'small',  // Initial position
                            
                        }} />
                    </Link>
                </Typography>


            </CardContent>
        </Card>
    );
};

export default BlogPost;
