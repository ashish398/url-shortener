import { useParams } from "react-router-dom";
import React from "react";
import { useGetUrlQuery } from "./types/operations";

const GoLink = () => {
  const { id } = useParams();
  const [url, setUrl] = React.useState("");
  const { data, loading, error } = useGetUrlQuery({
    variables: { id: id },
  });

  if (loading) return <div>Loading...</div>;

  if (error) {
    return (
      <div>
        <h1>Ouch! That page didn't load</h1>
        <p>Here's why : {error.message}</p>
      </div>
    );
  }

  if (!data?.getURL?.long_url) {
    return (
      <div>
        <h1>This is not a URL</h1>
        <p>You've navigated to a URL that doesn't exist.</p>
        <p>That most likely means that the id {id} isn't the id of url.</p>
      </div>
    );
  }

  setUrl(data?.getURL?.long_url);
  console.log(url);
  window.location = url;

  return <></>;
};

export default GoLink;
