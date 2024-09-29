import React, {useState, useEffect} from 'react';
import "./home.css";

const Home = ()=>{

const [loading, setLoading] = useState(true);
const [users, setUsers] = useState([]);
const [error, setError] = useState(null);

useEffect(()=>{

const fetchData = async ()=>{

try{
	const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
	if(!response.ok){
		throw new Error("bad network");
	}
	const data = await response.json();
	console.log(data);
	setUsers(data);
	setLoading(false);
}
catch (error){
	console.error('Error fetching data:', error);
	setError(error.message);
	setLoading(true);
}
};
fetchData();

},[]);

if(loading) return <p> Page is Loading.... </p>
	if(error) return <p> Error : {error}</p>

return(
<div>
  <h1>Users List</h1>
  <table className="user-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Website</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>    
{users.map((user)=>(
	<tr key={user.id}>
	  <td>{user.id}</td>
	  <td>{user.name}</td>
	  <td>{user.website}</td>
	  <td>{user.email}</td>
	  <td>{user.address.city}</td>

	</tr> 
))}
</tbody>
</table>
</div>
);
};

export default Home;