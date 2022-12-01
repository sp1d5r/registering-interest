import React from "react";
import "./form.css";
import {Button, Form} from "react-bootstrap";

function FormLocal() {
    return (
        <div className={"form"}>
            <p className={"text"}>Enter your details here!</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll send you the free access token to this email!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree to the terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" className={"button-middle"}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default FormLocal;