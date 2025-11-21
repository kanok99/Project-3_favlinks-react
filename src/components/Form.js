import React, { useState } from "react";

const Form = ({ addLink }) => {
  const [formData, setFormData] = useState({ name: "", url: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.url) return;
    addLink(formData);
    setFormData({ name: "", url: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-5">
      <input
        type="text"
        name="name"
        placeholder="Site Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 flex-1 focus:ring focus:ring-blue-200"
      />
      <input
        type="url"
        name="url"
        placeholder="https://example.com"
        value={formData.url}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 flex-1 focus:ring focus:ring-blue-200"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
