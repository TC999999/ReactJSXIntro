const App = () => (
  <div>
    <div id="buttons">
      <h2>Buttons</h2>
      <Button name="no style" />
      <Button name="normal" class={["btn"]} />
      <Button name="primary" class={["btn", "btn-primary"]} />
      <Button name="secondary" class={["btn", "btn-secondary"]} />
      <Button name="danger" class={["btn", "btn-danger"]} />
      <Button name="success" class={["btn", "btn-success"]} />
      <Button name="warning" class={["btn", "btn-warning"]} />
      <Button name="info" class={["btn", "btn-info"]} />
    </div>
    <div id="alerts">
      <h2>Alerts</h2>
      <Alert name="no style" />
      <Alert name="normal" class={["alert"]} />
      <Alert name="primary" class={["alert", "alert-primary"]} />
      <Alert name="secondary" class={["alert", "alert-secondary"]} />
      <Alert name="success" class={["alert", "alert-success"]} />
      <Alert name="danger" class={["alert", "alert-danger"]} />
      <Alert name="warning" class={["alert", "alert-warning"]} />
      <Alert name="info" class={["alert", "alert-info"]} />
    </div>
  </div>
);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
