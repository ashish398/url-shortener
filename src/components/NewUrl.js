import React from 'react'
import { gql, useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';




const ADD_URL = gql`
  mutation addURL($url: AddURLInput!) {
    addURL(input: [$url] ) {
      uRL{
        long_url
      }
    }
  }
`;




function NewUrl() {
  const [long_url, setLongUrl] = React.useState("");
  const [addURL, { loading, error }] = useMutation(ADD_URL);

  function handleCreatePost(event) {
    event.preventDefault();
    let short_url = uuidv4();
    addURL({ variables: { long_url, short_url } });
  }

  return (
    <div>
      <h1>URL Shortener!!!!</h1>
      <form onSubmit={handleCreatePost}>
        <input onChange={(event) => setLongUrl(event.target.value)} />
        <button disabled={loading} type="submit">
          Shorten Me!
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}




export default NewUrl;
