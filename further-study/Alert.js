const Alert = (props) => {
  if (props.class && props.class.includes("alert")) {
    const classes = props.class.join(" ");
    return <div className={classes}>{props.name}</div>;
  }
  return <div>{props.name}</div>;
};
