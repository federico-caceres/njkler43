import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {

  state = {
    postsList: posts
  }

  searchPost = (e) => {
    this.setState({
      postsList: posts.filter(data => {
        return data.title.toLowerCase().includes(e.target.value.toLowerCase()) 
      })
    })
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" onChange={this.searchPost} />
        </div>
        <ul>
            {
              this.state.postsList.map( (el, i) => {
                return (
                          <li key={i}>
                            <a  href={el.url}><img src={el.image } /></a>
                            <p>{ el.title }</p>
                          </li>
                       )
              })
            }
            
        </ul>
      </div>
    )
  }
}


export default App


