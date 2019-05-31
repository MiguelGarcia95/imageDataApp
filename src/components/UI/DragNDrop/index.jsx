import React, {Component} from 'react';
import './style.css';

class DragNDrop extends Component {
  state = {
    dragging: false,
    dragCounter: 0,

  }

  dropRef = React.createRef();

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
    this.setState({dragCounter: this.state.dragCounter++});
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      this.setState({dragging: true})
    }
  }

  handleDragOut = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({dragCounter: this.state.dragCounter--});
    if (this.state.dragCounter > 0) return;
    this.setState({dragging: false})
  }

  handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();
  }


  render() {
    return (
      <section id='drag_drop' ref={this.dropRef}>
        {this.state.dragging && (
          <section id="drag_box">
            <section id="drag_box_content">
              <section>Drop Here :)</section>
            </section>
          </section>
        )}
        {this.props.children}
      </section>
    )
  }

}

export default DragNDrop;