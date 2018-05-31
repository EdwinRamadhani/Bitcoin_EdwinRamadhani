import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { constructor() {
  super();
  this.state = {
  dataKu: [], };
  }
  componentDidMount(){ axios.get('https://blockchain.info/ticker') .then((ambilData) => {
  console.log(ambilData);
  this.setState({
  dataKu: ambilData.data,
  })
  })
  };

  render() {
    var css = {border:'1px solid black', padding:'12px'} const data = this.state.dataKu.map((item, index)=>{ var id = item.id;
    var buy = item.buy;
    var sell = item.sell;
    var mata = item.
    
    return <tr style={css} key={index}>
    <td style={css}>{id}</td>
    <td style={css}>{buy}</td>
    <td style={css}>{sell}</td>
    </tr>;
    })

    return (
      <div><center>
      <h1>Kurs</h1> <table style={css}> <tbody>
      <tr>
      <th>No</th> <th>ID</th> <th>buy</th> <th>sell</th>
      </tr>
      { data }
      </tbody>
      </table> </center></div>
      );
      }}
      export default App;