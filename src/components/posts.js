import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CreatePost from "./AddPost";
import CustomNavbar from "./navbar";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            // https://social-media-api.taufiqrx8.workers.dev/api/posts
            // http://127.0.0.1:8787/api/posts
            const resp = await fetch(
                "https://social-media-api.taufiqrx8.workers.dev/api/posts"
            );
            const postsResp = await resp.json();
            setPosts(postsResp.reverse());
        };

        getPosts();
    }, []);

    return (
        <>
            <CustomNavbar />
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <div>
                            <h1 style={{ color: "white" }}>Posts</h1>
                            <CreatePost />
                            {(posts.length > 0) ?
                                posts.map((post, i) => (
                                    <div key={i}>
                                        <Card border="success" style={{ backgroundColor: '#121212' }} text={'white'}>
                                            <Card.Header>{post.username + ' >'} </Card.Header>
                                            <Card.Body>
                                                <Card.Title>{post.title}
                                                    <span className="float-end" border="success" style={{ color: 'grey' }}>23 votes</span>
                                                </Card.Title>
                                                <Card.Text>
                                                    {post.content}
                                                    <span className="float-end">
                                                        <Button variant="outline-success">Vote up 👍 </Button>
                                                    </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        {/* <Card key={post.id} border="primary" style={{ backgroundColor: '#121212', marginLeft: 50 }} text={'white'}>
                                            <Card.Header>{post.username + ' >'} {post.content}</Card.Header>
                                        </Card> */}
                                        <br />
                                    </div >
                                )) :
                                <h3 style={{ color: "white" }}>No posts!</h3>}
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};

export default Posts;
