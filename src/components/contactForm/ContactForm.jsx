import { nanoid } from 'nanoid';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number, id: nanoid() });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="form-label" htmlFor="name">
          Name:{' '}
        </label>
        <input
          className="form-control"
          style={{ width: '300px' }}
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          required
          onChange={this.handleChange}
        />
        <br />
        <label className="form-label" htmlFor="number">
          Number:{' '}
        </label>
        <input
          className="form-control"
          style={{ width: '300px' }}
          type="tel"
          name="number"
          id="number"
          value={this.state.number}
          required
          onChange={this.handleChange}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

export default ContactForm;
