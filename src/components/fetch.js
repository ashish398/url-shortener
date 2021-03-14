import { useHistory, useParams } from "react-router-dom";
import React from "react"
import {
  Header,
  Loader,
  Table,
  Container,
} from "semantic-ui-react"
import { useGetUrlQuery } from "./types/operations"

    
export default function GoLink() {
    
  const { id } = useParams();
  const [url, setUrl] = React.useState("");
  const { data, loading, error } = useGetUrlQuery({
      variables: {id:id}
  })
  if (loading) return <Loader active />
  if (error) {
    return (
      <Container text className="mt-24">
        <Header as="h1">Ouch! That page didn't load</Header>
        <p>Here's why : {error.message}</p>
      </Container>
    )
  }
  if (!data?.getURL?.long_url) {
    return (
      <Container text className="mt-24">
        <Header as="h1">This is not a URL</Header>
        <p>You've navigated to a URL that doesn't exist.</p>
        <p>That most likely means that the id {id} isn't the id of url.</p>
      </Container>
    )
  }
  
  setUrl(data?.getURL?.long_url);
  console.log(url)
  window.location = url;
 
  return (
    <>
    </>
  )
}

