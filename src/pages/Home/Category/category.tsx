import { useState } from "react";
import "./category.css";
import artImg from "/art-studies.png"
import webDev from "/web-programming.png"
import Com from "/communication.png"
import Video from "/videography.png"
import Camera from "/dslr-camera.png"
import Market from "/performance.png"
import Write from "/copy-writing.png"
import Finance from "/money.png"
import Atom from "/atom.png"
import Network from "/web.png"

interface Category {
  id: number;
  title: string;
  courses: number;
  img: string;
}

const categories: Category[] = [
  { id: 1, title: "Art & Design", courses: 38, img: artImg },
  { id: 2, title: "Development", courses: 38, img: webDev },
  { id: 3, title: "Communication", courses: 38, img: Com },
  { id: 4, title: "Videography", courses: 38, img: Video },
  { id: 5, title: "Photography", courses: 38, img: Camera },
  { id: 6, title: "Marketing", courses: 38, img: Market },
  { id: 7, title: "Content Writing", courses: 38, img: Write  },
  { id: 8, title: "Finance", courses: 38, img: Finance },
  { id: 9, title: "Science", courses: 38, img: Atom },
  { id: 10, title: "Network", courses: 38, img: Network }
];

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 6);

  return (
    <div className="categories">
      <div className="categories-header">
        <div className="xa">
            <h2>Top Categories</h2>
            <p>Explore our Popular Categories</p>
        </div>

        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "All Categories"}
        </button>
      </div>

      <div className="categories-grid">
        {visibleCategories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.img} alt="" className="category-img" />
            <h3>{category.title}</h3>
            <p>{category.courses} Courses</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
