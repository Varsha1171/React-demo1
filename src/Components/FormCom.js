import React ,{useState} from 'react';
import './FormCom.css';
import styled from 'styled-components';
import ErrorModel from './ErrorModel';
const Button=styled.button`
color: white;
background-color: blueviolet;
border-radius: 20%;
padding: 10px;
align-items: center;
text:"Add User";
`;
const FormCom = (props) => {
    const [user,setUserName]=useState({
        Username:'',
        Age:''
    });
    const [error,setError]=useState();

    const userNameChangeHandler=(event)=>{
        setUserName({
            ...user,
            Username:event.target.value,
        });
        console.log(user);
    };
    const ageChangeHandler=(event)=>{
        setUserName({
            ...user,
            Age:event.target.value,
        });
        console.log(user);

    };

    const submitHandler=(event)=>{
        event.preventDefault();
        if(user.Username.trim().length===0||user.Age.trim()===0){
            setError({
                title:"Invalid Input!",
                msg:"Username and Age fields are required!"
            });
            return;
        }
        if(+user.Age<1){
            setError({
                title:"Age is Incorrect!",
                msg:"Age is  must be positive(>0)",
            });
            return;
        }
        const newUser={
            Username:user.Username,
            Age:user.Age,
        }
        console.log(newUser);
        props.onGetNewUserData(newUser);
        setUserName({
            Username:" ",
            Age:" "
        });
    };
    const errorHandler = ()=>{
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModel onConfirm={errorHandler} title={error.title} msg={error.Age}></ErrorModel>}
            <form onSubmit={submitHandler}>
                <div className="DivClass">
                    <label>Username</label>
                    <br></br>
                    <input type='text' value={user.Username} onChange={userNameChangeHandler}></input>
                    <br></br>
                    <label>Age(Years)</label>
                    <br></br>
                    <input type='number' value={user.Age} onChange={ageChangeHandler}></input>
                    <br></br>
                    <Button>Add User</Button>
                </div>
            </form>
        </div>
    );
}
export default FormCom;