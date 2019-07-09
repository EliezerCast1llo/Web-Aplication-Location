import React from 'react';
import { Form, Button, Spinner, Row, Col } from 'react-bootstrap';

interface ILogin {
  title: string;
  handleInputs: Function;
  handleData: Function;
  inputs: any;
  loading: boolean;
}

function LoginForm({ title, handleInputs, handleData, loading }: ILogin) {
  return (
    <div className="container-fluid">
      <div className="login-wrapper">
        <Row>
          <Col
            xl={{ span: 6, offset: 3 }}
            lg={{ span: 8, offset: 2 }}
            md={{ span: 12, offset: 1 }}
            sm={12}
            xs={12}
          >
            <h1 className="title">{title}</h1>
            <Form onSubmit={(e: any) => handleData(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="Enter username"
                  size={'lg'}
                  name="name"
                  onChange={(e: any) => handleInputs(e)}
                />
                <Form.Text className="text-muted">
                  We'll never share your username with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size={'lg'}
                  name="password"
                  onChange={(e: any) => handleInputs(e)}
                />
              </Form.Group>
              <div className="button-login-wrapper">
                {!loading ? (
                  <Button
                    type="submit"
                    variant="outline-success"
                    block
                    size="lg"
                  >
                    Submit
                  </Button>
                ) : (
                  <Spinner animation="grow" variant="primary" />
                )}
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LoginForm;
