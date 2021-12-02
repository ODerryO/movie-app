import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import setAuthToken from "../../redux/utilities/setAuthToken";

const Header = () => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const user = "User Name";
  const userSplit = user.split(" ");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setMode("login");
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (values.email === "" && values.password === "") {
      alert("Form can't be empty!");
      return;
    } else {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = {
        email: values.email,
        password: values.password,
      };
      axios
        .post(
          "https://testminiproject.herokuapp.com/api/user/login",
          JSON.stringify(body),
          config
        )
        .then((res) => {
          console.log(res);
          setAuthToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          console.error(JSON.stringify(err));
        });
      setShow(false);
    }
  };

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  useEffect(() => {
    console.log(show);
  }, [show]);

  const renderLogin = () => {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title className="col-md-12 text-center">
            Please Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className="col-md-12 text-center"
              variant="primary"
              type="submit"
              // onClick={(e) => {
              //   e.preventDefault();
              // setIsLoggedIn(true);
              // setShow(false);
              // }}
            >
              Sign In
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Text className="col-md-12 text-center">
            Don't have an account? Sign up now for{" "}
            <b
              onClick={(e) => {
                e.preventDefault();
                setMode("register");
              }}
              style={{ cursor: "pointer" }}
            >
              free.
            </b>
          </Form.Text>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderRegister = () => {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title className="col-md-12 text-center">
            Register your account for free!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="fullName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className="col-md-12 text-center"
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // setIsLoggedIn(true);
                // setShow(false);
              }}
            >
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Text className="col-md-12 text-center">
            Already have an account? Sign in{" "}
            <b
              onClick={(e) => {
                e.preventDefault();
                setMode("login");
              }}
              style={{ cursor: "pointer" }}
            >
              now.
            </b>
          </Form.Text>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container className="container-fluid">
          <Navbar.Brand className="logo me-5" href="/">
            <span>
              <i className="fas fa-film"></i>{" "}
            </span>
            MovieReviewApp
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
          >
            <span>
              <i className="fas fa-bars" style={{ color: "white" }}></i>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav mb-2 mb-lg-0">
            <Nav className="m-auto">
              <Form className="d-flex">
                <InputGroup className="m-2">
                  <FormControl
                    style={{ width: "350px" }}
                    size="lg"
                    placeholder="Search Movie"
                  />
                  <Button
                    style={{ color: "white" }}
                    variant="outline-secondary"
                    id="button-addon2"
                  >
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </Nav>
            {isLoggedIn === false ? (
              <Button
                className="sign-in"
                variant="primary"
                onClick={handleShow}
              >
                Sign In
              </Button>
            ) : isLoggedIn === true ? (
              <DropdownButton
                id="dropdown-basic-button"
                title={`${userSplit[0].charAt(0)}${userSplit[1].charAt(0)}`}
              >
                <Dropdown.ItemText>{user}</Dropdown.ItemText>
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="#/help">Help</Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoggedIn(false);
                  }}
                  href="/"
                >
                  Sign Out
                </Dropdown.Item>
              </DropdownButton>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {mode === "login"
        ? renderLogin()
        : mode === "register"
        ? renderRegister()
        : null}
    </>
  );
};

export default Header;
