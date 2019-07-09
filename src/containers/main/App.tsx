import React, { useEffect, useState } from 'react';
import '../../App.css';
import Header from '../../components/Header';
import Users from '../../components/main/Users';
import fetchUsers from '../../actions/fetchUsers';
import { TOKEN } from '../../constants';

const App: React.FC = () => {
  function handleSelectUser() {}

  const [users, setResponse] = useState([]);
  const [error, setError] = useState(null);
  let storage = localStorage.getItem(TOKEN);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const re = await fetchUsers();
        setResponse(re);
      } catch (error) {
        localStorage.removeItem(TOKEN);
        window.location.href = '/login';
        setError(error);
      }
    };
    users.length === 0 && FetchData();
  }, [users.length]);

  return (
    <div className="App">
      <Header storage={storage} />
      <Users
        title={'Users List'}
        handleSelectUser={handleSelectUser}
        usersList={users}
        error={error}
      />
    </div>
  );
};

export default App;
