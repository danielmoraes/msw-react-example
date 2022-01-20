import { useEffect, useState } from "react";

const App = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
      res.json().then((json) => {
        setUsers(json.data);
        setPages(json.total_pages);
      })
    );
  }, [page]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
        Previous
      </button>
      <button disabled={page >= pages} onClick={() => setPage((p) => p + 1)}>
        Next
      </button>
    </>
  );
};

export default App;
