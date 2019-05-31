import React, {Component} from 'react';

class DragNDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    }
    this.dragCounter = 0;
  }


  componentDidMount() {
    let container = this.dropRef.current;
    container.addEventListener('dragenter', this.handleDragIn);
    container.addEventListener('dragleave', this.handleDragOut);
    container.addEventListener('dragover', this.handleDrag);
    container.addEventListener('drop', this.handleDrop);
  }

  compo

  componentWillUnmount() {
    let container = this.dropRef.current;
    container.removeEventListener('dragenter', this.handleDragIn);
    container.removeEventListener('dragleave', this.handleDragOut);
    container.removeEventListener('dragover', this.handleDrag);
    container.removeEventListener('drop', this.handleDrop);
  }

  dropRef = React.createRef();

  handleDrag = event => {
    event.preventDefault();
    event.stopPropagation();
  }
  
  handleDragIn = event => {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter++;
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      this.setState({dragging: true})
    }
  }
  
  handleDragOut = event => {
    event.preventDefault();
    event.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter > 0) return
    this.setState({dragging: false})
  }
  
  handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();
  }


  render() {
    return(
      <section className='drag_drop_container' ref={this.dropRef}>

      </section>
    )
  }
}

export default DragNDrop;