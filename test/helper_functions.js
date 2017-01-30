export const shutOffLights = (row) => {
	const numberOfLights = row.props.width;
	for(let light = 0; light < numberOfLights; light++) {
		row.refs[light].setState({on: false});
	}
};
