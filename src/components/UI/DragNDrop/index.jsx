import React, {Component} from 'react';

class DragNDrop extends Component {

  dropRef = React.createRef()

  componentDidMount() {
    
    let container = this.dropRef.current
    container.addEventListener('dragenter', this.handleDragIn)
    container.addEventListener('dragleave', this.handleDragOut)
    container.addEventListener('dragover', this.handleDrag)
    container.addEventListener('drop', this.handleDrop)
  }
  
  componentWillUnmount() {
    let container = this.dropRef.current
    container.removeEventListener('dragenter', this.handleDragIn)
    container.removeEventListener('dragleave', this.handleDragOut)
    container.removeEventListener('dragover', this.handleDrag)
    container.removeEventListener('drop', this.handleDrop)
  }

  handleDrag = event => {
    event.preventDefault();
    event.stopPropagation();
  }

  handleDragIn = event => {
    event.preventDefault();
    event.stopPropagation();
  }

  handleDragOut = event => {
    event.preventDefault();
    event.stopPropagation();
  }

  handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();
  }


  render() {
    return (
      <section ref={this.dropRef}>
        {this.props.children}
      </section>
    )
  }

}

export default DragNDrop;