import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

import { FloatingLabel, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/button";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  let users = [];
  const emailRef = useRef("");
  const passwordRef = useRef("");
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      console.log(res.data);
      users = res.data;
    });
  }, []);

  let con = true;

  const checkdata = () => {
    const e = emailRef.current.value;
    const p = passwordRef.current.value;
    console.log(users);
    users.forEach((ele, i) => {
      if (ele["email"] === e && ele["password"] === p) {
        console.log(ele);

        alert("sucess");

        con = false;
        navigate(`/Home`);
      }
    });

    if (con) alert("check user id and password");
  };

  return (
    <>
      <Container
        style={{
          width: "50%",
          marginTop: "10%",
          border: "1px solid grey",
          padding: "50px",
        }}
      >
        <h1
          style={{
            color: "black",
            marginBottom: "10px",
            fontFamily: "bolder",
            textAlign: "center",
          }}
        >
          Login Page
        </h1>
        <FloatingLabel label="Email" className="mb-3">
          <Form.Control
            type="email"
            id="email"
            ref={emailRef}
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel label="Password">
          <Form.Control
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="Password"
          />
        </FloatingLabel>
        <Container style={{ textAlign: "center" }}>
          <Button
            className="mt-3"
            style={{ width: "50%" }}
            onClick={() => checkdata()}
          >
            Login
          </Button>
          <p className="mt-2">If not registerd click to Register</p>

          <Button
            style={{ width: "50%" }}
            onClick={() => navigate(`/registration`)}
          >
            Register
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default Login;
