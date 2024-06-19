import React, { useEffect } from "react";

export const Van = () => {
  
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <div>Van</div>;
};
