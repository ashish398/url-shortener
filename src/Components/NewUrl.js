import React, { useState } from "react";
import { useAddUrlMutation } from "./types/operations";
import { v4 as uuidv4 } from "uuid";

const NewUrl = () => {
  const [longUrl, setLongUrl] = useState("");

  const [AddUrlMutation] = useAddUrlMutation({});

  const AddUrl = () => {
    const shortUrl = uuidv4();
    const url = {
      short_url: shortUrl,
      long_url: longUrl,
    };
    console.log(shortUrl)
    AddUrlMutation({ variables: { url: url } });
  };

  const inputChangeHandler = (event) => {
    setLongUrl(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    AddUrl();
    setLongUrl("");
  };

  return (
    <>
      <h3>Enter New URL</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor='longUrl'>Long URL</label>
        <input
          id='longUrl'
          type='url'
          onChange={inputChangeHandler}
          value={longUrl}
          placeholder='Eg: https://dgraph.io/'
        />
        <button type='submit'>Shorten Me</button>
      </form>
    </>
  );
};

export default NewUrl;
