// import React, {Component} from 'react';

// class DragNDrop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dragging: false,
//       dragCounter: 0,
//     }
//   }

//   dropRef = React.createRef();

//   componentDidMount() {
//     let container = this.dropRef.current;
//     container.addEventListener('dragenter', this.handleDragIn);
//     container.addEventListener('dragleave', this.handleDragOut);
//     container.addEventListener('dragover', this.handleDrag);
//     container.addEventListener('drop', this.handleDrop);
//   }

//   componentWillUnmount() {
//     let container = this.dropRef.current;
//     container.removeEventListener('dragenter', this.handleDragIn);
//     container.removeEventListener('dragleave', this.handleDragOut);
//     container.removeEventListener('dragover', this.handleDrag);
//     container.removeEventListener('drop', this.handleDrop);
//   }


//   handleDrag = event => {
//     event.preventDefault();
//     event.stopPropagation();
//   }
  
//   handleDragIn = event => {
//     event.preventDefault();
//     event.stopPropagation();
//     this.setState({dragCounter: this.state.dragCounter++})
//     if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
//       this.setState({dragging: true})
//     }
//   }
  
//   handleDragOut = event => {
//     event.preventDefault();
//     event.stopPropagation();
//     this.setState({dragCounter: this.state.dragCounter--})
//     if (this.state.dragCounter === 0) {
//       this.setState({dragging: false})
//     }
//   }
  
//   handleDrop = event => {
//     event.preventDefault();
//     event.stopPropagation();
//     if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
//       this.props.handleDrop(event.dataTransfer.files)
//       event.dataTransfer.clearData()
//       this.state.dragCounter = 0    
//     }
//   }


//   render() {
//     return(
//       <section 
//         style={{display: 'inline-block', position: 'relative'}} 
//         className='drag_drop_container' ref={this.dropRef}
//       >
//         {this.state.dragging && (
//           <section 
//             style={{
//               border: 'dashed grey 4px', 
//               backgroundColor: 'rgba(255,255,255,0.8)',
//               position: 'absolute',
//               top: 0, bottom: 0,
//               left: 0, right: 0,
//               zIndex: 9999
//             }}
//           >
//             <section
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: 0, right: 0,
//                 textAlign: 'center',
//                 color: 'grey',
//                 fontSize: 36
//               }}
//             >
//               <section>Drop Here :)</section>
//             </section>

//           </section>
//         )}
//         {this.props.children}
//       </section>
//     )
//   }
// }

// export default DragNDrop;