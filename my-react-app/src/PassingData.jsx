function PassingData(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: `${props.fontSize}px`,
  };

  return (
    <>
      <button style={buttonStyle}>{props.text}</button>
    </>
  );
}

function PropsDestructuring({ color, fontSize, text }) {
  const buttonStyle = {
    color: color,
    fontSize: `${fontSize}px`,
  };

  return (
    <>
      <button style={buttonStyle}>{text}</button>
    </>
  );
}

PassingData.defaultProps = {
  text: "Click me!",
  color: "cyan",
  fontSize: 12,
};

function DefaultPropsDestructuring({
  color = "yellow",
  fontSize = 12,
  text = "Click me!",
}) {
  const buttonStyle = {
    color: color,
    fontSize: `${fontSize}px`,
  };

  return (
    <>
      <button style={buttonStyle}>{text}</button>
    </>
  );
}

export default PassingData;
