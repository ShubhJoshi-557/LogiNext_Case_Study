import Users from "./components/Users";
import UserContextProvider from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    </div>
  );
}

export default App;
