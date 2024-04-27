import React, { useState} from "react";

function CategoryFilter({ categories, onFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);

    if (onFilterChange) {
      onFilterChange(selected);
      }
    };
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <select value={selectedCategory} onChange={handleCategoryChange}>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
