import logo from './logo.svg';
import './App.css';
import React, { cloneElement } from 'react';
import { useTable } from 'react-table'





class App extends React.Component {  //создаем класс

  constructor(props) { // закидыаем в конструктор пропсы
    super(props); // переносим пропсы
    this.state = { //создаем стэйт 
      name: '', // имя этэйт 
      type: '', // тип стэйт 

    }
  }
  change = (e) => { // создаем событие и через ивент 
    this.setState({name: e.target.value }); // задаем стэйту name новое значени которое беере м из вэлъю элемента 
    this.setState({type: e.target.type });// задаем стэйту type новое значени которое беере м из type элемента
  }
  submitForm = (e) => { // делаем чтобы форма не перезагружалась из-за кнопки сабмит
    e.preventDefault();

  }


  render() { 
 let a = ''; // создаем переменную куда закинем строку html
    a = <tr> <td>{this.state.type}</td> <td>{this.state.name}</td> </tr> // закидываем в  переменную а строку  html d ajhvfnt nf,kbws  где элементами выступают стэйты name и type

    return ( 
      <div className="App"> 
        <form onSubmit={this.submitForm}>
 <input onChange={this.change} type='text' />
        <input onChange={this.change} type='number' />   
        <input onChange={this.change} type='range' />
        <textarea onChange={this.change} ></textarea>
        <select onChange={this.change} >
          <option> Game1</option>
          <option> Game2</option>
          <option> Game3</option>
          <option> Game4</option>

        </select>
        <input type = 'submit' />
        </form>
        <table border="1"> 
          <caption>Таблица типов сэтов</caption>
          <tr>
            <th>Name</th>
            <th>Data</th>
          </tr>
          {a} 
        </table>




      </div>
    );
  }


}

export default App;
