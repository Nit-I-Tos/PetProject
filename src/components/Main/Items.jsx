import React, { Component } from 'react'
import Item from './Item'
import s from './Items.module.css'

export class Items extends Component {
  render() {
    return (
      <main className={s.main}>
        {this.props.items.map(el => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    )
  }
}

export default Items