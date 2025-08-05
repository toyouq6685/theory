const Circle = (props) => {

    const circleStyle = {
        width: props.x,
        height: props.y,
        backgroundColor: props.bg,
        borderRadius: '9999px',
    }

    return <div style={circleStyle}></div>  
}

export default Circle;