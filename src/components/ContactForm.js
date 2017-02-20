import React from 'react';


class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      contactLog: []
    };
  }
  mailTo(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;
    this.setState({
      contactLog: this.state.contactLog.concat({name, email, message})
    })
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.message.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.mailTo.bind(this)} >
          <input type="text" ref="name"  placeholder="Name" />
          <input type="text" ref="email"  placeholder="Email" />
          <textarea ref="message" cols="30" rows="10"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}


export default ContactForm;
