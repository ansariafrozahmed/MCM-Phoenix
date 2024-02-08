import React from "react";

const testFetch = async () => {
  const response = await fetch(
    "https://syrocsbck.sagartech.co.in/api/getAllCategories"
  );
  const result = await response.json();
  return result;
};
const DocumentsAndForms = async () => {
  const data = await testFetch();
  // console.log(data);
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>
          <h2>{item?.category_name}</h2>
          <h3>{item?.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default DocumentsAndForms;
