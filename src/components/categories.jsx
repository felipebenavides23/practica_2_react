import React from "react";

const Categorie = ({ children, title }) => (
  <div className="categories">
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
);

export default Categorie;
