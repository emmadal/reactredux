import React from "react";
import { Col, Button, Row, Input, notification, Card } from "antd";
import {
  BookOutlined,
  PlusCircleFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import { mapDispatchToProps, mapStateToProps } from "./redux/utils";
import { connect } from "react-redux";
import "./App.css";

function App({ addNewNote, deleteNote, message }) {
  const [input, setInput] = React.useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const setupNotification = (type) => {
    type === "success"
      ? notification[type]({
          message: "Notification",
          description: "Note add with success",
        })
      : notification[type]({
          message: "Notification",
          description: "Note deleted",
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewNote(input);
    setInput("");
    setupNotification("success");
  };

  const removeNote = (key) => {
    deleteNote(key);
    setupNotification("error");
  };

  return (
    <div>
      <h1 className="App">Todo App React-redux</h1>
      <Row className="row">
        <Col sm={10}>
          <Input
            size="large"
            placeholder="Enter a text"
            prefix={<BookOutlined />}
            value={input}
            onChange={handleInput}
          />
        </Col>
        <Col sm={2} offset={1}>
          <Button
            size="large"
            type="primary"
            icon={<PlusCircleFilled />}
            onClick={handleSubmit}
            disabled={input.length < 5}
          >
            ADD NOTE
          </Button>
        </Col>
      </Row>

      <div className="message_block">
        <Row>
          {message.map((item, key) => (
            <Col className="card" key={key}>
              <Card
                key={key}
                title="Redux card"
                extra={
                  <Button
                    onClick={() => removeNote(key)}
                    danger
                    icon={<DeleteOutlined />}
                  >
                    Delete
                  </Button>
                }
                style={{ width: 300 }}
              >
                <p>{item}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
