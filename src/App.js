import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Items from './components/Main/Items';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Каменный Метеорит',
          img: 'stone.jpg',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          category: 'Каменный',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Железо-каменный метеорит',
          img: 'feStone.jpg',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          category: 'Железо-каменный',
          price: '79.99'
        },
        {
          id: 3,
          title: 'Каменный метеорит',
          img: 'stone.jpg',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          category: 'Каменный',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Железный метеорит',
          img: 'feMeo.jpg',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          category: 'Железный',
          price: '99.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render(){
  return (
    <div className="App">
      <Header className="header" orders={this.state.orders} />
      <Items items={this.state.items} onAdd={this.addToOrder} />
      <Footer/>
    </div>
  );
}

addToOrder(item){
  let isInArr = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
    isInArr = true
  })
  if(!isInArr)
  this.setState({orders: [...this.state.orders, item]})
}
}

export default App;
