import React, { Component } from 'react'
import { db } from '../firebase'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = async() => {
    const snapshot = await db.collection('settings').doc('admin').get()
    const data = snapshot.data()
    console.log(data)
  }

  render() {
    return (
      <div>
        Your Component
      </div>
    );
  }
}

export default Home;