import React, { Component } from 'react';
import './Exercice.css';

const style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  };
class Exercice extends Component {
  render() {
    return (
        <div>
          <h1 style={style_header}>This is a Heading with Light Blue Background</h1>
          <p className='para'>This is a paragraph. No shite!!!</p>
          <a href="https://www.example.com">This is a link</a>
          <form>
            <p className='para'>this is a form: </p>
            <label>
              Name:
              <input type="text" />
            </label>
            <br /><br />
            <button type="submit">Submit</button>
          </form>
          <p className='para'>this is an image:</p>
          <img
            src="https://via.placeholder.com/150"
            alt="Sample Image"
          />
          <ul><p className='para'>this is a list :</p>
            <li>Mangoost</li>
            <li>Cat</li>
            <li>Lion</li>
          </ul>
        </div>
      );
    }
  }


export default Exercice;