import { Grid } from '@mui/material';
import BlogPost from './components/BlogPost';
import { Container, Typography } from '@mui/material';
import Head from 'next/head';
import './styles/blogstyles.css'

type Blog = {
  id: number;
  title: string;
  body: string;
  comments: Comment[];
};


export const metadata = {
  title: 'Posts',
};


async function getData(): Promise<Blog[]> {
  try {
    // Fetch all posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts: Blog[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}



export default async function Home() {
  const data = await getData()


  return (

    <>


      <Container maxWidth="lg">

        <Typography variant='h2' sx={{ marginBottom: '40px', textAlign: "center" }} component="h1">
          Blogs
        </Typography>


        <Grid container spacing={2} justifyContent="center">



          {data.map(blog => (
            <Grid key={blog.id} item xs={12} sm={6} md={6} lg={6}>
              <BlogPost id={blog.id} title={blog.title} body={blog.body} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </>
  )
}