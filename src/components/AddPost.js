import { useState } from "react";
import { Alert, Card } from 'react-bootstrap';
import CreatePostForm from './createPostForm';

function CreatePost(props) {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");

    function onError(err) {
        setError(err);
        setShow(true);
    }

    function createPostHandler(postData) {
        console.log('JSON==========', JSON.stringify(postData));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
            allowCredentials: 'true',
            credentials: 'include'
        };
        // https://social-media-api.taufiqrx8.workers.dev/api/posts
        // http://127.0.0.1:8787/api/posts
        fetch('https://social-media-api.taufiqrx8.workers.dev/api/posts', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                // const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = response.statusText || response.status;
                    return Promise.reject(error);
                }

                console.log('xxxxxxxxxxxxxx', response.headers.get('Set-Cookie'))
                // this.setState({ postId: data.id })
                window.location.reload(false);
            })
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
                setShow(true);
                setError(error);
            });
    }

    return (
        <Card className="p-4 mb-4" border="success" style={{ backgroundColor: '#121212' }}>
            {(show) ?
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Error</Alert.Heading>
                    <p>{error}</p>
                </Alert>
                : <></>
            }
            <CreatePostForm onAddPost={createPostHandler} onError={onError} />
        </Card>
    );
}

export default CreatePost;