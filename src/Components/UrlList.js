import React from "react";
import { useAllUrLsQuery } from "./types/operations";

const UrlList = () => {
  const { data, loading, error } = useAllUrLsQuery();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Ouch! That page didn't load</h1>
        <p>Here's why : {error.message}</p>
      </div>
    );
  }

  const items = data?.queryURL;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Long URL</th>
            <th>Shortened URL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item,index) => (
            
            <tr key={item.id}>
              <td>{index+1}</td>
              <td>{item.long_url}</td>
              <td>
                <a href={`${item.long_url}`}> {item.id} </a>
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UrlList;
