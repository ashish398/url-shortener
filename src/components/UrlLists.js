
    import React from "react"
    import {
      Header,
      Loader,
      Table,
      Container,
    } from "semantic-ui-react"
    import { useAllUrLsQuery } from "./types/operations"
    
    export default function UrlFeed() {
      const { data, loading, error } = useAllUrLsQuery()
      if (loading) return <Loader active />
      if (error) {
        return (
          <Container text className="mt-24">
            <Header as="h1">Ouch! That page didn't load</Header>
            <p>Here's why : {error.message}</p>
          </Container>
        )
      }
    
      const items = data?.queryURL?.map((url) => {
 
    
        return (
          <Table.Row key={url?.id}>
            <Table.Cell>
              {" " + url?.long_url}
            </Table.Cell>
            <Table.Cell>
                <a href={`${url?.long_url}`} >{" " + url?.id}</a>

              
            </Table.Cell>
          </Table.Row>
        )
      })
    
      return (
        <>
          <Table basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Long Url</Table.HeaderCell>
                <Table.HeaderCell>Short Url</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>{items}</Table.Body>
          </Table>
        </>
      )
    }