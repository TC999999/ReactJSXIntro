const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent />
  </div>
);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
