import { gql, useMutation } from "@apollo/client"
import { useEffect } from "react";

const LOGIN = gql`
    mutation login{
    login(username: "admin", password: "admin"){
        ok
        user{
            id
            username
        }
        token
        }
    }
`
function Login(){
    const [mutateFunction, {loading, error, data}] = useMutation(LOGIN);
    useEffect(()=>{
        mutateFunction();
    }, [mutateFunction]);
    if (loading) return <p> Loading ...</p>;
    if (error) return <p> Error: {error.message} </p>;

    if (data){
        localStorage.setItem("accessToken", data.login.token)
    }

    return <div>
        {
        data? <p> {data.login.user.username.toUpperCase()} </p> : <p> Login Failed </p>
        }
    </div>
}

export default Login;