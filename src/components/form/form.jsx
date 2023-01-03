import React, {useState} from "react";
import "./form.css";
import {Alert, Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {sendFormDetail} from "../../cloud-infrastructure/firebase";

function FormLocal({title}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");

    function validEmail()
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {

            return true;
        }
        setError(["Email Address is Invalid"]);
        return false;
    }



    const sendForm = () => {
        if (validEmail()){
            sendFormDetail(email, name, phoneNumber, title).then(() => {
                navigate("/thank-you");
            })
        }
    }

    return (
        <div className={"form"} style={{marginBottom: "5%"}}>
            {
                error.length > 0 && <Alert variant={"danger"} className={"alert-div"}>
                    <b>There are a few errors on your forum</b>
                    <ul>
                        {error.length > 0 && error.map((error) => {
                            return <li>{error}</li>
                        })}
                    </ul>
                </Alert>
            }
            <p className={"text"}>Enter your details here!</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email (Required)" onChange={(e) => {setEmail(e.target.value)}}/>
                    <Form.Text className="text-muted">
                        We'll send you the free access token to this email!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" placeholder="Name (Optional)" onChange={(e) => {setName(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Phone Number (Optional)" onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                </Form.Group>

                <Button variant="primary"  className={"button-middle"} onClick={(e) => {sendForm();}}>
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default FormLocal;