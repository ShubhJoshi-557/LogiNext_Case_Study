import { createContext, useState, useEffect } from "react";
import Loading from "../components/Loading";
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3004/users");
      setUsers(await response.json());
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteCard = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editCard = (newUser) => {
    setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, editCard, deleteCard }}>
      {loading ? <Loading /> : props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
