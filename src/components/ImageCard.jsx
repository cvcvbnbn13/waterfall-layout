import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { span: 0 };
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;

    const span = Math.ceil(height / 10);

    this.setState({ span });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      this.setSpan();
    });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.small} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
