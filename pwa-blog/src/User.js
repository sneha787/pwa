import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function User() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((resp) => {
      resp.json().then((result) => {
        console.warn("result", result);
        setData(result);
        localStorage.setItem("user", JSON.stringify(result))
      });
    }).catch(err=>{
        // alert("catch block")
        let collection = localStorage.getItem("user")
        setData(JSON.parse(collection))
        setMode("offline")
    })
  }, []);
  return (
    <div>
    <div>
        {
            mode === "offline"?
            <div class="alert alert-danger" role="alert">
                You are in offline mode or some internet connection issues.
            </div>
            : null
        }
    </div>
      <h1>User Page </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address(Street)</th>
            <th>Phone</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
        {
            data.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.street}</td>
                    <td>{item.phone}</td>
                    <td>{item.company.name}</td>
                </tr>
            ))
        }    
        </tbody>
      </Table>
    </div>
  );
}

export default User;
