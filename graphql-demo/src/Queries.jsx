import React from 'react'
import { useQuery, gql } from '@apollo/client'

const FetchCreators = gql`
    query courses{
        courses{
            id
            title
            description  
        }
    }
`
const Queries = () => {
    const {loading, error, data} = useQuery(FetchCreators);

    if (loading) return <p> Loading...</p>
    
    if (error) return <p>Error: {error}</p>
    
    return (
    <div>
        <h1> Queries </h1>

        {
            data.courses.map(item=>{
                return (<div>
                        <li> {item.title} </li>
                        <li> {item.description} </li>
                     </div>)
            })

        }
    </div>
    )
}

export default Queries