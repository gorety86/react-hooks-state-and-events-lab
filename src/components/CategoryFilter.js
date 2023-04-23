import React from "react";

function CategoryFilter({categories, selectedCategory, handleSelectedCategory}) {
    const categoryButtons = categories.map(category => {
        <button key={category} onClick={(e) => handleSelectedCategory(category)}
        className={category===selectedCategory ? "selected" : ""}>
            {category}

        </button>
    })

    return (
        <div className="category">
            <h5>Category Filters</h5>
            {categoryButtons}
        </div>
    );
}
export default CategoryFilter;