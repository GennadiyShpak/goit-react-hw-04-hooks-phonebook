import { useState } from 'react';

import s from './Form.module.css';

const INITIAL_STATE = {
  name: '',
  id: '',
  number: '',
};

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function oninputHandler({ target }) {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    !name || !number
      ? alert(`Some field are empty`)
      : this.props.onSubmit({ name, number });
    reset();
  }

  function reset() {
    this.setState({ ...INITIAL_STATE });
  }

  return (
    <form onSubmit={onSubmitHandler} className={s.a}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={oninputHandler}
          placeholder="Enter name"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={oninputHandler}
          placeholder="Enter phone number"
        />
      </label>

      <button type="submit" className={s.addBtn}>
        Add contact
      </button>
    </form>
  );
}

export default Form;
