import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Axios from 'axios';
import 'react-quill/dist/quill.snow.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddPost = () => {
    const [title, settitle] = useState();
    const [description, setdescription] = useState();
    const [email, setemail] = useState();

    async function handleSubmit(e) {
        if (title == null) {
            alert("please enter title !")
            e.preventDefault()
        } else if (description == null) {
            alert("please enter description !")
            e.preventDefault()
        } else if (email == null) {
            alert("please enter email !")
            e.preventDefault()
        } else {
            await Axios.post("http://localhost:4000/api", { title, description, email })
        }

    }

    return (
        <div>
            <NavBar />
            <div className="container" style={{ marginTop: "2rem" }}>
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h5>Email</h5></Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h5>Title</h5></Form.Label>
                        <Form.Control type="text" placeholder="Enter Title of your post..." onChange={(e) => settitle(e.target.value)} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <h5>Description</h5></Form.Label>
                        {/* <ReactQuill modules={modules} onChange={(e) => setdescription(e.target.value)} /> */}
                        <Form.Control style={{ height: '22vh' }} type="text" placeholder="Enter Description of your post..." onChange={(e) => setdescription(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddPost