import './List.css';
const List=(props)=>{
    const listOfUsers=props.Users.map((user,index)=>{
        return <div key={index}>
            <h4 className='listMember'>{user.Username}({user.Age}Years Old)</h4>
            <br></br>
        </div>
    });
    return(
<div>{listOfUsers}</div>
    );
}
export default List;