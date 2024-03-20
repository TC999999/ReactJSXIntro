const Button = (props) => {
  if (props.class && props.class.includes("btn")) {
    const classes = props.class.join(" ");
    return <button className={classes}>{props.name}</button>;
  }
  return <button>{props.name}</button>;
};
