import React, { Component } from 'react';
//Tarefas

import Form from './Form';
import Tarefas from './Tarefas';
import './Main.css';
// FORM
export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefa: [],
    index: -1,
  };

  componentDidMount() {
    const tarefa = JSON.parse(localStorage.getItem('Tarefas'))

    if(!tarefa) return;

    this.setState({ tarefa })

  }

  componentDidUpdate(prevProps, prevState) {
    const {tarefa} = this.state;
    if(tarefa === prevState.tarefa) return;
    localStorage.setItem('Tarefas', JSON.stringify(tarefa))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {tarefa,index} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefa.indexOf(novaTarefa) !== -1) return;
    const novasTarefas = [...tarefa];
    if(index === -1) {
      this.setState({
        tarefa: [...novasTarefas, novaTarefa],
        novaTarefa: ""
      })
    } else {
      novasTarefas[index] = novaTarefa
      this.setState({
        tarefa: [...novasTarefas],
        index: -1,
      })
    }

  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const {tarefa} = this.state;
    this.setState({
      index,
      novaTarefa: tarefa[index]
    })
  }

  handleDelete = (e,index) => {
    const {tarefa} = this.state;
    const novasTarefa = [...tarefa];
    novasTarefa.splice(index, 1)
    this.setState({
      tarefa: [...novasTarefa]
    })

  }

  render() {
    const { novaTarefa, tarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <Form
         handleSubmit={this.handleSubmit}
         handleChange={this.handleChange}
         novaTarefa={novaTarefa} 
         />
         <Tarefas
         handleEdit={this.handleEdit}
         handleDelete={this.handleDelete}
         tarefa={tarefa} 
         />

      </div>
    );
  }
}
