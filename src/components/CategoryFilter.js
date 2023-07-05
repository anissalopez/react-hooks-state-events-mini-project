import React from "react";

function CategoryFilter({categories, categoryHandler, selectedCategory, filterBy}) {



  const categoryButton = categories.map((category) => {return <button onClick ={()=>categoryHandler(category)} key={category} className={filterBy === category ? "selected": ""}>{category} </button>})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
     
    </div>
  );
}

export default CategoryFilter;
