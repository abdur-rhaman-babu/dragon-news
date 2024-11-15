import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
 
  const { category_name, category_id } = category;
  return (
    <div>
      <NavLink to={`/category/${category_id}`} className='btn flex mb-2'>{category_name}</NavLink>
    </div>
  );
};

export default Categories;
