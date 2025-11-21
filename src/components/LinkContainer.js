import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const LinkContainer = () => {
  const [links, setLinks] = useState([
    { name: "React", url: "https://reactjs.org" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" }
  ]);

  const addLink = (newLink) => {
    setLinks([...links, newLink]);
  };

  const removeLink = (index) => {
    const updated = links.filter((_, i) => i !== index);
    setLinks(updated);
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6">
      <Form addLink={addLink} />
      <Table links={links} removeLink={removeLink} />
    </div>
  );
};

export default LinkContainer;
