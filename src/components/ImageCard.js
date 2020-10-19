import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };
		// creating a reference, it uses in react for accessing DOM elements details
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		// why adding addEventListener? => because we want to access current property once image is loaded,
		// if we will not add this then because of componentDidMount will be called before fetching data
		// it will cause null value of current and clientHeight will come 0.
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);

		this.setState({ spans });
	};

	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
