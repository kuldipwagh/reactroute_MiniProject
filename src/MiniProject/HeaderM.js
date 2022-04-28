import { Link } from "react-router-dom";
import { userSet } from "./Users.js";
import { useParams } from "react-router-dom";
//import {Redirect} from 'react-router';
import { useState } from "react";

export function Header()
{
    return(

        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div className="row">
                    <div className="col-md-6"><Link className="navbar-brand" to='/userlist'>SHOW USERs</Link>  </div>
                   <div className="col-md-6"> <Link className="navbar-brand" to='/adduser'>Add User</Link> </div>   
                </div>               
            </nav>
</header>

    )
}

export function UserList()
{
    return(
        <>
        <table class="table table-bordered" >
        <thead>
        <tr>
            <th >Id</th>
            <th >Name</th>
            <th >ContactNo</th>
            <th >Age</th>
            <th >Username</th>
            <th >Password</th>
            <th colSpan={3} >ACTION</th>
        </tr>
        </thead>
        <tbody>
            {            
                 Array.from(userSet).map(user=>{                   
                return(                       
                            <tr>
                                <td>{user.Id}</td>
                                <td>{user.Name}</td>
                                <td>{user.ContactNo}</td>
                                <td>{user.Age}</td>
                                <td>{user.Username}</td>
                                <td>{user.Password}</td>
                                <td><Link to={'/userdetails/'+user.Id} >Details</Link></td>
                                <td><Link to={'/deleteuser/'+user.Id} >Delete</Link></td>
                                <td><Link to={'/updateuser/'+user.Id} >Update</Link></td>
                            </tr>
                    )
                })                
            }
            </tbody>
        </table>
        </>
    );        
}

export function UserDetails()
{
    let {id}=useParams();
    return( 
             Array.from(userSet).map(ele=> 
             {   
                //console.log(ele.Id);
                if(ele.Id=== parseInt(id))
                {
                   return(
                       <>
                       <ul>
                       <li>ID: {ele.Id}</li>
                       <li>Name:{ele.Name}</li>
                       <li>ContactNo:{ele.ContactNo}</li>
                       <li>Age: {ele.Age}</li>
                       <li>Username:{ele.Username}</li>
                       <li>Password:{ele.Password}</li>                       
                       </ul>
                       </>
                   )
                    
                }
             }
             )
    )
}

export function AddUser(){

    var newuser= { 
        Id:0,
        Name:'',
        ContactNo: 0,
        Age:0,
        Username:'',
        Password:''
    }

    let [myuser,Filluser]= useState(newuser);

    function Add(ev)
    {
        Filluser(currentobj=>
        {
            return{...currentobj,[ev.target.name]:ev.target.value }
        })
    }

function AddChanges(ev){
    ev.preventDefault(); 
    userSet.add(myuser);
    console.log(myuser);
    console.log(userSet);
 
}
    return(
        <>
         <h2>Add User</h2>
        <form onSubmit={AddChanges} className="form">
        <label>ID:</label><input type='text' value={myuser.Id} name='Id'  onChange={Add} ></input>
            <label>Name:</label><input type='text' value={myuser.Name} name='Name'  onChange={Add} ></input>
            <label>ContactNo:</label><input type='text'  value={myuser.ContactNo} name='ContactNo'  onChange={Add} ></input>
            <label>Age:</label><input type='text' value={myuser.Age} name='Age'  onChange={Add} ></input>
            <label>Username:</label><input type='text' value={myuser.Username} name='Username'  onChange={Add} ></input>
            <label>Password:</label><input type='text' value={myuser.Password} name='Password'  onChange={Add} ></input>
            <input className="btn-primary" type='submit'></input>
        </form>
        </>
    )
}

export function DeleteUser()
{
    let {id}=useParams();
    let user= Array.from(userSet).find(ele=>ele.Id=== parseInt(id))
    let Isdelete=userSet.delete(user);
    if(Isdelete==true)
    {
        // <Redirect to='userlist'></Redirect>
//    return(
//      <UserList></UserList>
//    )
    }
}

export function UpdateUser()
    {
    let {id}=useParams();  
    let user=Array.from(userSet).find(ele=>ele.Id===parseInt(id));   
 
 let [myuser,setUser]=useState(user);  

    function Update(ev){
        setUser(currenObj=>
        {
            return{...currenObj,[ev.target.name]:ev.target.value}
        }
        ); 
        }
    function UpdateChanges(ev){   
        ev.preventDefault();         
            console.log(myuser);
            userSet.delete(user);
            userSet.add(myuser);
         
    }
    return(
        <>
        <h2>Update User</h2>
        <form onSubmit={UpdateChanges} className="form">
            <div className="form">
            
            <label>Name:</label><input type='text' value={myuser.Name} name='Name'  onChange={Update} ></input>
            <label>ContactNo:</label><input type='text'  value={myuser.ContactNo} name='ContactNo'  onChange={Update} ></input>
            <label>Age:</label><input type='text' value={myuser.Age} name='Age'  onChange={Update} ></input>
            <label>Username:</label><input type='text' value={myuser.Username} name='Username'  onChange={Update} ></input>
            <label>Password:</label><input type='text' value={myuser.Password} name='Password'  onChange={Update} ></input>
            <input className="btn-primary" type='submit'></input>
            </div>
        </form>
        </>
    )    
}
