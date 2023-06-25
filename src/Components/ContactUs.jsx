import styled from "@emotion/styled"
import contactUsJson from "../json/contact-us.json"
import Lottie from "lottie-react";
import { Title } from "./AboutUs";
import { Alert, Box, Button, CircularProgress, TextField } from "@mui/material";
import { AlternateEmail, Email, Send, Person, Phone } from "@mui/icons-material";
import { useState } from "react";
import Airtable from "airtable";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
    const customerBaseId = process.env.REACT_APP_AIRTABLE_CUSTOMER_BASE_ID;
    const airtableBase = new Airtable({ apiKey: airtableApiKey }).base(customerBaseId);

    const validate = () => {
        if (!name) throw new Error("Name is missing.");
        if (!email) throw new Error("Email is missing.");
        if (!phone) throw new Error("Phone number is missing.");
    }

    const resetAllFields = () => {
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
    }

    const onSubmit = () => {
        console.log(email + " " + message)
        setError(null);
        setSuccess(null);
        setLoading(true);
        try {
            validate();
            airtableBase('Customers').create([
                {
                    "fields": {
                        "Name": name,
                        "Email": email,
                        "Created At": Date.now(),
                        "Message": message,
                        "Phone": phone
                    }
                }
            ], function (err, records) {
                if (err) {
                    setLoading(false);
                    throw err;
                }
                records.forEach(function (record) {
                    setSuccess(true);
                });
                setLoading(false);
                resetAllFields();
            });
        } catch (e) {
            setLoading(false);
            setError(e.message ? e.message : "Something went wrong!")
        }
    }

    return (
        <Wrapper id="contactus">
            <Title>
                Contact Us
            </Title>
            <Content>
                <LottieWrapper>
                    <Lottie animationData={contactUsJson} loop />
                </LottieWrapper>
                <Form>
                    <Title>
                        Say Hello...!
                    </Title>
                    <InputWrapper>
                        <Person sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            fullWidth
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            id="name" label="Full Name" variant="outlined" />
                    </InputWrapper>
                    <InputWrapper>
                        <AlternateEmail sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            id="email" label="Email" variant="outlined" />
                    </InputWrapper>
                    <InputWrapper>
                        <Phone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            required
                            fullWidth
                            type="phone"
                            value={phone}
                            onChange={(e) => {
                                if(!isNaN(e.target.value)){
                                    setPhone(e.target.value);
                                }
                              
                            }}
                            id="phone" label="Phone number" variant="outlined" />
                    </InputWrapper>
                    <InputWrapper>
                        <Email sx={{ color: 'action.active', mr: 1, my: 0.5, alignSelf: 'flex-start' }} />
                        <TextField
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            fullWidth
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                        />
                    </InputWrapper>
                    <Box sx={{ '& button': { backgroundColor: "#73a3a7" }, alignSelf: "flex-end", }}>
                        <Button
                            disabled={loading}
                            variant="contained"
                            endIcon={
                                (loading) ?
                                    <CircularProgress
                                        style={{ color: "#73a3a7" }}
                                        size={20}
                                        thickness={4}
                                    /> : <Send />
                            }
                            onClick={onSubmit}
                        >
                            Send
                        </Button>
                    </Box>
                    {
                        (success) ? <Alert
                            onClose={() => setSuccess(null)}
                            severity="success">Message Sent! We will reach out to you soon.</Alert> : null

                    }
                    {
                        (error) ? <Alert
                            onClose={() => setError(null)}
                            severity="error">{error}</Alert> : null
                    }
                </Form>
            </Content>

        </Wrapper >
    )
}

const Wrapper = styled.div`
    width: 100%;
    padding: 24px 0;
    background-color: #E0EAEB;
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    max-width: 90%;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const LottieWrapper = styled.div`
    margin-left: 100px;
    width: 30%;
`
const Form = styled.div`
    width: 40%;
    max-width: 500px;
    background-color: white;
    margin: 24px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap:18px;
`

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`