import React, {Component} from 'react';

class DragNDrop extends Component {
  dropRef = React.createRef();

  componentDidMount() {
    let container = this.dropRef.current;
    container.addEventListener('dragenter', this.handleDragIn);
    container.addEventListener('dragleave', this.handleDragOut);
    container.addEventListener('dragover', this.handleDrag);
    container.addEventListener('drop', this.handleDrop);
  }

  componentDidUnmount() {
    let container = this.dropRef.current;
    container.removeEventListener('dragenter', this.handleDragIn);
    container.removeEventListener('dragleave', this.handleDragOut);
    container.removeEventListener('dragover', this.handleDrag);
    container.removeEventListener('drop', this.handleDrop);
  }

  render() {
    return(
      <section className='drag_drop_container' ref={this.dropRef}>

      </section>
    )
  }
}

export default DragNDrop;