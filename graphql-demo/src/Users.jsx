import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_USERS = gql`
    query allUsers{
        users{
            username
            email
        }
    }    
`

function Users(){

    const userToken = localStorage.getItem("accessToken");
    if (!userToken) return <p> Login first </p>;

    const {loading, error, data}  = useQuery(GET_USERS);
    if (loading) return <p> Loading... </p>
    if (error) return <p> Error: {error.message} </p>
    console.log(data)
    return <div>
        <ul> {
        data.users.map(user=>{
            return <li>{user.username}</li>
        })
        } </ul>
    </div>
}

export default Users;
