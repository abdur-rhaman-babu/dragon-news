import { useEffect, useState } from "react";
import Categories from "../categories/categories";

const NavbarLeft = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <Categories key={category.category_id} category={category} />
      ))}
    </div>
  );
};

export default NavbarLeft;
