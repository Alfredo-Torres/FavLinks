import { useState } from 'react'

const Form = () => {
  const handleChange = (event) => {
    // 
    if(event.target.id === "link")
    // update linkname in state
    this.setState({ linkName: event.target.value});
    else
    this.setState({ url: event.target.value});
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
  
    event.preventDefault()

    // addNew was passed as props from LinkContainer
    let newFavLink = {linkName: this.state.linkName, url: this.state.url};

    this.props.addNew(newFavLink);

    // resets the states
    this.setState({ linkName: '', url: ''});
  }

  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      <label for="link">Link Name:</label>

      <input type="text" id="link" onChange={(event) => this.handleChange(event)} />

      <button type="submit" onClick= {() =>this.onFormSubmit()}>Submit</button>
    </form>
  )
}

export default Form
