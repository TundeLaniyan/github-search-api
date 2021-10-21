import Card from "react-bootstrap/card";
import Button from "react-bootstrap/button";
import Loader from "react-loader-spinner";

function MyCard({ user, repo, page, setPage }) {
  const repoLimit = 5;
  const pageLimit = Math.ceil(repo.length / repoLimit);

  return (
    <Card style={{ width: "18rem" }}>
      {user.loading ? (
        <Loader
          type="Circles"
          color="#0d6efd"
          height="150"
          width="100%"
          style={{ margin: "5rem" }}
        />
      ) : (
        <>
          <Card.Img variant="top" src={user.avatar_url || "./default.png"} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            {repo[0]?.loading ? (
              <Loader type="Circles" color="#0d6efd" height="50" width="100%" />
            ) : (
              repo
                .slice((page - 1) * repoLimit, page * repoLimit)
                .map((cur) => (
                  <Card.Text key={cur.url}>
                    <a href={cur.url}>{cur.name}</a>
                  </Card.Text>
                ))
            )}
            <div className="buttons">
              <Button
                variant="primary"
                onClick={() => setPage(page - 1)}
                disabled={page < 2}
              >
                Prev
              </Button>
              {page}
              <Button
                variant="primary"
                onClick={() => setPage(page + 1)}
                disabled={page >= pageLimit}
              >
                Next
              </Button>
            </div>
          </Card.Body>
        </>
      )}
    </Card>
  );
}

export default MyCard;
