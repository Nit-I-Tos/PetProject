import React, { Component } from 'react'
import s from './Order.module.css'

export class Order extends Component {
  render() {
    return (
      <div className={s.item}>
        <img src={'./img/'+ this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
      </div>
    )
  }
}

export default Order