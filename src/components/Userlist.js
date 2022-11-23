import React from "react";
import { getUser } from "../api/api";
import { useLoaderData } from "react-router-dom";

const Userlist = () => {
  let data = useLoaderData();
  console.log(data.data);

  return (
    <div>
      {data.data.map((item, index) => (
        <>
          <h3>
            {index + 1}.{item.name}
          </h3>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </>
      ))}
    </div>
  );
};

export default Userlist;

export function user() {
  return getUser();
}
