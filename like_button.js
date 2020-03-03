'use strict';

// creating the component
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
      
    if (this.state.liked) {      
      return (
        <button onClick={() => this.setState({ liked: false })}>
          You liked commentID ->  {this.props.commentID}
        </button>
      );

    }    

    return(
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>      
    );
  }
}

// putting the component we created into the dom
document.querySelectorAll('.like_button_container').forEach(domContainer => {

  const commentID = parseInt(domContainer.dataset.commentid);

  ReactDOM.render(
    React.createElement(LikeButton, {commentID}), domContainer
  );

});
