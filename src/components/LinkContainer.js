import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const handleRemove = (index) => {
    const tempArray = this.state.favlinks;
    // will remove one element starting from index
    tempArray.splice(index, 1);
    // setting new state
    this.setState ({ favLinks : tempArray});

  }

  const handleSubmit = (favLink) => {
   // created logic and added new favLink to favLink array in state
    this.setState ({
      favLinks: [...this.state.favLinks, favLink]
    });

  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Added Table Component */}
      <Table linkData= {this.state.favLinks} removeLink= {(index) => this.removeCharacter(index)} />

      <br />

      <h3>Add New</h3>
      {/*TODO - Added Form component */}
      <Form addNew= {(favLinks) => handleSubmit(favLinks)} />
    </div>
  )
}

export default LinkContainer
