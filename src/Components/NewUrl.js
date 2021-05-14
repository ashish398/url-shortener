import React, { useState } from "react";
import { useAddUrlMutation, namedOperations } from "./types/operations";
import { v4 as uuidv4 } from "uuid";
import styles from "./NewUrl.module.css";

const NewUrl = () => {
  const [longUrl, setLongUrl] = useState("");

  const [addUrlMutation] = useAddUrlMutation({
    refetchQueries: [namedOperations.Query.allURLs],
  });

  const AddUrl = () => {
    const shortUrl = uuidv4();
    const url = {
      short_url: shortUrl,
      long_url: longUrl,
    };
    addUrlMutation({ variables: { url: url } });
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
      <h3 className = {styles.class}>Go On, enter a really long URL</h3>
      <form onSubmit={submitHandler}>
        <input
          id='longUrl'
          type='text'
          onChange={inputChangeHandler}
          value={longUrl}
          placeholder='Eg: https://dgraph.io/'
        />
        <div>
          <button type='submit'>Hit me! I'll Shorten it.</button>
        </div>
      </form>
    </>
  );
};

export default NewUrl;
