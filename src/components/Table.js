import React from "react";

const Table = ({ links, removeLink }) => (
  <table className="min-w-full border border-gray-200">
    <thead className="bg-blue-100 text-blue-700">
      <tr>
        <th className="py-2 px-4 border">Name</th>
        <th className="py-2 px-4 border">URL</th>
        <th className="py-2 px-4 border">Action</th>
      </tr>
    </thead>
    <tbody>
      {links.map((link, index) => (
        <tr key={index} className="hover:bg-gray-50 transition duration-200">
          <td className="py-2 px-4 border">{link.name}</td>
          <td className="py-2 px-4 border text-blue-600 underline">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url}
            </a>
          </td>
          <td className="py-2 px-4 border text-center">
            <button
              onClick={() => removeLink(index)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
