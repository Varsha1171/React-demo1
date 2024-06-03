import FormCom from "./Components/FormCom";
import List from "./Components/List";
import React,{useState} from "react";
function App() {
  const Users = [];
  const [usersList,setUsersList]=useState(Users);
  const newUserDataGetHandler = (newUser) => {
     setUsersList(usersList=>{
      return [
        ...usersList,
        newUser,
      ]
    });
  }
  return (
    <div className="App">
      <FormCom onGetNewUserData={newUserDataGetHandler}></FormCom>
      <List Users={usersList}></List>
    </div>
  );
}

export default App;
