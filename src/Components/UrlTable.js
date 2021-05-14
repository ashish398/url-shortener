import React from "react";
import styles from "./UrlTable.module.css";

const UrlTable = (props) => {
  return (
    <>
      <table className={styles.tableStyle}>
        <thead>
          <tr>
            <th>#</th>
            <th>Long URL</th>
            <th>Shortened URL</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
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

export default UrlTable;
