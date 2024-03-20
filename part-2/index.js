const Tweet = (props) => {
  return (
    <div className="tweet">
      <p>
        <b>Username:</b> {props.username}
      </p>
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Date:</b> {props.date}
      </p>
      <p>
        <b>Message:</b> {props.message}
      </p>
    </div>
  );
};

const App = () => (
  <div id="all-tweets">
    <Tweet
      username="KenAdams"
      name="Joey Tribianni"
      date="09/01/03"
      message="JOEY DOESN'T SHARE FOOD"
    />
    <Tweet
      username="TestUserName"
      name="TestName"
      date="01/01/01"
      message="First Tweet"
    />
    <Tweet />
  </div>
);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
