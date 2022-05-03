import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleChange = (e) => {
    let newValue = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: newValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = { post: this.state };
    let token = document.querySelector('meta[name="csrf-token"]').content;
    fetch("/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": token,
      },
      redirect: "error",
      body: JSON.stringify(this.state),
    }).then((resp) => {
      this.props.refetchData();
    });
    // .then((post) => {
    //   this.props.history.push("/posts");
    // });
  };

  render() {
    return (
      <>
        <Button className="post-submit-btn" onClick={this.toggle}>
          Update Status
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ModalHeader toggle={this.toggle}>Update Status</ModalHeader>
            <ModalBody>
              <label htmlFor="title">Title: </label>
              <input type="text" name="title" onChange={this.handleChange} />
              <label htmlFor="content"></label>
              <textarea
                name="content"
                id=""
                cols="30"
                rows="10"
                onChange={this.handleChange}
              ></textarea>
              <Button
                className="create-post-btn"
                type="submit"
                onClick={this.toggle}
              >
                Create - P o s t
              </Button>
              <Button className="cancel-post-btn" onClick={this.toggle}>
                C a n c e l
              </Button>
            </ModalBody>
          </form>
        </Modal>
      </>
    );
  }
}
export default NewPost;
