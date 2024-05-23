import React from "react";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input, Textarea } from "@nextui-org/input";
import { Button, CircularProgress, Avatar } from "@nextui-org/react";
import "../styles/Contact.css";
import data from "../info/contact.json";
import { IoOpenOutline } from "react-icons/io5";

const Contact = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init(import.meta.env.VITE_MAIL_PUBLIC_KEY), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_MAIL_SERVICE_ID;
        const templateId = import.meta.env.VITE_MAIL_TEMPLATE_ID;
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                from_name: nameRef.current.value,
                reply_to: emailRef.current.value,
                message: messageRef.current.value,
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className="section-container contact-container">
            <h1 className="contact-header">Contact</h1>
            <div className="contact-content">
                <div className="contact-info">
                    <h2 className="contact-subheader">Check out my Links!</h2>
                    <div>
                        {data.socials.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" className="link-card">
                                <div className="link-card-left">
                                    <Avatar isBordered color="default" radius="sm" src={social.icon} />
                                    <p>{social.name}</p>
                                </div>
                                <IoOpenOutline />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="contact-form-container">
                    <h2 className="contact-subheader">Contact Me Directly!</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <Input type="text" label="Your Name" isRequired ref={nameRef} className="form-input" />
                            <Input type="email" label="Your Email" isRequired ref={emailRef} className="form-input" />
                        </div>
                        <div className="form-row">
                            <Textarea label="Message" isRequired ref={messageRef} className="form-input" />
                        </div>
                        <div className="form-button-row">
                            {loading ? (
                                <CircularProgress color="secondary" aria-label="Loading..." className="loading-circle" label="Sending..." />
                            ) : (
                                <Button type="submit" color="secondary" variant="flat" disabled={loading} className="submit-button">
                                    {loading ? "Sending..." : "Send"}
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
