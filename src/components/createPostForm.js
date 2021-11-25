import { useRef, useEffect } from "react";

function CreatePostForm(props) {
    const usernameInputRef = useRef(null);
    const titleInputRef = useRef(null);
    const contentInputRef = useRef(null);

    function submitHandler(event) {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredTitle = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;

        if (enteredContent == null || enteredContent.trim().length === 0
            || enteredTitle == null || enteredTitle.trim().length === 0
            || enteredUsername == null || enteredUsername.trim().length === 0) {
            props.onError("Please enter all fields");
            return;
        }

        const postData = {
            username: enteredUsername,
            title: enteredTitle,
            content: enteredContent,
        };

        props.onAddPost(postData);
    }

    useEffect(() => {
        console.log(usernameInputRef.current);
    }, [usernameInputRef, titleInputRef, contentInputRef]);

    return (
        <form onSubmit={submitHandler} border="success">
            <div className="form-outline">
                <label forhtml="username" className="form-label"
                    style={{ marginLeft: "0px", color: 'white' }}>Username</label>
                <input className="form-control" id="username" ref={usernameInputRef} />
            </div>
            <div className="form-outline">
                <label forhtml="title" className="form-label"
                    style={{ marginLeft: "0px", color: 'white' }}>Title</label>
                <input className="form-control" id="title" ref={titleInputRef} />
            </div>
            <div className="form-outline">
                <label forhtml="content" className="form-label"
                    style={{ marginLeft: "0px", color: 'white' }}>Content</label>
                <textarea className="form-control" id="content" ref={contentInputRef} />
            </div>
            <div style={{ paddingTop: "3%" }}></div>
            <button type="submit" className="btn btn-success float-end dark">Submit</button>
            <div style={{ paddingTop: "3%" }}></div>
        </form>
    );
}

export default CreatePostForm;