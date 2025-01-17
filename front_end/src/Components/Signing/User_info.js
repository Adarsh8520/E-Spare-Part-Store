import React from 'react'
import axios from 'axios';
import { useState, useEffect  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function User_info() {

  const navigate = useNavigate();
  const [data, setState] = useState({
    firstName: "",
    lastName: "",
    role:""
  });

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log("customer data: "+user.id);
    axios.get("http://localhost:8080/user/"+user.id)
    .then(response =>{
        console.log(response.data.firstName);
       setState({firstName:response.data.firstName,lastName:response.data.lastName,role:response.data.role})
    })
    .catch(err =>{
      console.log(err);
    })


  },[]);


  return (
    <div>
      <h3>Welcome,  {data.firstName} {data.lastName}</h3>
      <hr />
    </div>

  )
}

export default User_info