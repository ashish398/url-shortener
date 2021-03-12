import React from "react"
import { useAllUrLsQuery } from "./types/operations"

export function UrlFeed() {
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
  console.log(data)
  const items = data?.queryURL?.map((url) => {

    return (
      <li key={url?.id}>
          url?.long_url
          url?.short_url
          </li>
    )})
    return(<>
        {items}
        </>
    )
    }

