import React from "react";
import fetch from "cross-fetch";

export default function App() {
  var getData = async () => {
    try {
      const res = await fetch("http://localhost:4000/");

      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }

      const user = await res.json();

      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={() => getData()}>Click me</button>;
}
