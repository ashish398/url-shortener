import React from 'react';
import { useQuery,gql} from  '@apollo/client';


function UrlLists(){
    const {loading,error,data} = useQuery(
        gql`
        {
            queryURL{
                id
                long_url
                short_url
            }
        }

    `);
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error.message}`;
    console.log(data)
    return (<p>
        <h1>HEYYYYYYYYYYYYYYYYYYY</h1>
        data.queryURL.map((url) =>
            <li key = {url.id}>
                <p>{url.long_url}
                {url.short_url}</p>
            </li>
            </p>
    )
    )}



export default UrlLists;