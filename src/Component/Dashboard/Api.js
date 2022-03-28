import React, { useEffect, useState } from "react";

const Api = () => {
  const [callapi, setcallapi] = useState("");
  useEffect(() => {
    fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then((res) => res.json())
      .then((data) => setcallapi(data));
  }, []);
  return (
    <>
      {callapi && callapi.map((data, index) => <div key={index}>{data.name}</div>)}
    </>
  );
};

export default Api;
