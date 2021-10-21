import Card from "./component/Card";
import Form from "./component/Form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <header className="App-header">Github search API</header>
      <div className="App-content">
        <Form setUser={setUser} setRepo={setRepo} setPage={setPage} />
        {user.notFound ? (
          <h1>Not found</h1>
        ) : (
          <Card user={user} repo={repo} page={page} setPage={setPage} />
        )}
      </div>
    </div>
  );
}

export default App;
