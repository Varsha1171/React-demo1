import React ,{useState , useRef} from 'react';
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
    const enteredUsername=useRef();
    const enteredAge=useRef();
    // const [user,setUserName]=useState({
    //     Username:'',
    //     Age:''
    // });
    const [error,setError]=useState();

    // const userNameChangeHandler=(event)=>{
    //     setUserName({
    //         ...user,
    //         Username:event.target.value,
    //     });
    //     console.log(user);
    // };
    // const ageChangeHandler=(event)=>{
    //     setUserName({
    //         ...user,
    //         Age:event.target.value,
    //     });
    //     console.log(user);

    // };

    const submitHandler=(event)=>{
        event.preventDefault();
console.log(enteredUsername.current.value);
        if(enteredUsername.current.value.trim().length===0||enteredAge.current.value.trim()===0){
            setError({
                title:"Invalid Input!",
                msg:"Username and Age fields are required!"
            });
            return;
        }
        if(+enteredAge.current.value<1){
            setError({
                title:"Age is Incorrect!",
                msg:"Age is  must be positive(>0)",
            });
            return;
        }
        const newUser={
            Username:enteredUsername.current.value,
            Age:enteredAge.current.value,
        }
        console.log(newUser);
        props.onGetNewUserData(newUser);
        // setUserName({
        //     Username:" ",
        //     Age:" "
        // });
        enteredUsername.current.value='';
        enteredAge.current.value='';
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
                    <input type='text' ref={enteredUsername}></input>
                    <br></br>
                    <label>Age(Years)</label>
                    <br></br>
                    <input type='number'  ref={enteredAge}></input>
                    <br></br>
                    <Button>Add User</Button>
                </div>
            </form>
        </div>
    );
}
export default FormCom;