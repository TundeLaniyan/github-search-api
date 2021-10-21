import Button from "react-bootstrap/button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";

function MyForm({ setUser, setRepo, setPage }) {
  const [search, setSearch] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setUser({ loading: true });
      setRepo([{ loading: true }]);
      const user = await axios.get(`https://api.github.com/users/${search}`);
      setUser(user.data);
      const repo = await axios.get(
        `https://api.github.com/users/${search}/repos`
      );
      setRepo(repo.data);
      setPage(1);
      setSearch("");
    } catch (error) {
      console.log(error);
      setUser({ notFound: true });
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter Github username"
          aria-label="Enter Github username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </Form>
  );
}

export default MyForm;
