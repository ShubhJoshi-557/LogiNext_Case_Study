import React, { useContext } from "react";
import CardComponent from "./CardComponent";
import { UserContext } from "../context/UserContext";

const Users = () => {
  const { users, editCard, deleteCard } = useContext(UserContext);

  return (
    <div className="container">
      <div className="row m-5">
        {users.map((curUser) => {
          return (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm 12 mb-5"
              key={curUser.id}
            >
              <CardComponent
                user={curUser}
                setDelete={deleteCard}
                setEdit={editCard}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
