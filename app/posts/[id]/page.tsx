'use client'

import { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material'; // Import List and ListItem components
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type Blog = {
    id: number;
    title: string;
    body: string;
};

type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

const BlogPostPage: React.FC = () => {
    const params = useParams()

    const { id } = params;
    const [blog, setBlog] = useState<Blog | null>(null);
    const [comments, setComments] = useState<Comment[]>([]); // State to store comments

    async function fetchData() {
        try {
            // Fetch blog post
            const blogResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (!blogResponse.ok) {
                throw new Error('Failed to fetch blog post');
            }
            const blogData: Blog = await blogResponse.json();
            setBlog(blogData);

            // Fetch comments for the blog post
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            if (!commentsResponse.ok) {
                throw new Error('Failed to fetch comments');
            }
            const commentsData: Comment[] = await commentsResponse.json();
            setComments(commentsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        if (id && typeof id === 'string') {

            fetchData();
        }
    }, [id]);



    if (!blog) {
        return (
            <Container>
                <Typography variant="h4">Loading...</Typography>
            </Container>
        );
    }

    return (

        <>
            <Head>
                <title>{blog.title}</title>
            </Head>


            <Container maxWidth="lg">

                <Typography color='primary' fontSize='18' sx={{ marginTop: '20px', marginLeft: "auto" , marginBottom:"20px" }} >
                    <Link className='blogsLink' href='/' color='primary' style={{ display: 'flex', alignItems: 'center' }} >

                        <ArrowBackIosIcon sx={{
                            fontSize: 'small',
                        }} />
                        <span style={{ marginLeft: '4px' }}>Blogs</span>
                    </Link>
                </Typography>


                <Typography variant="h4" gutterBottom>{blog.title}</Typography>
                <Typography variant="body1" sx={{ marginBottom: "20px" }}>{blog.body}</Typography>

                {/* Display comments */}
                <Typography variant="h5" gutterBottom>Comments:</Typography>
                <List>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={comment.name}
                                    secondary={
                                        <>


                                            {comment.body}
                                            <Box sx={{ marginTop: "20px" }}>
                                                <Typography
                                                    component="span"
                                                >written by: </Typography>

                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="primary"

                                                >
                                                    {comment.email}
                                                </Typography>
                                            </Box >

                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </List>
            </Container>
        </>
    );
};

export default BlogPostPage;
