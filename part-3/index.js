const Person = (props) => {
  let reply;
  let name;
  if (props.age < 18) {
    reply = "you must be 18.";
  } else {
    reply = "please go vote!";
  }

  if (props.name.length > 8) {
    name = props.name.slice(0, 6);
  } else {
    name = props.name;
  }

  const hobbies = props.hobbies.map((h) => {
    return <li>{h}</li>;
  });

  return (
    <div>
      <p>Learn some information about this person.</p>
      <h3>{name}</h3>
      <h3>{reply}</h3>
      <ul>{hobbies}</ul>
    </div>
  );
};

const App = () => (
  <div>
    <Person
      name="Charles"
      age="27"
      hobbies={["basket weaving", "gardening", "painting"]}
    />
    <Person name="Mackenzie" age="11" hobbies={["gaming", "soccer"]} />
    <Person
      name="Jacqueline"
      age="31"
      hobbies={["Chilli Pepper Farming", "Growing Blueberry Trees"]}
    />
  </div>
);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
