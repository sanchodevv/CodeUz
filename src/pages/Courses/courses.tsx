
import img1 from "/course1.png";
import img2 from "/course2.png";
import img3 from "/course3.png";
import "./courses.css"
import { Flex} from "antd";
import Search from "antd/es/transfer/search";
import { useState } from "react";

interface Course {
    id: number;
    title: string;
    author: string;
    weeks: number;
    students: number;
    price: number;
    image: string;
    category: string;
}
const courses: Course[] = [
  {
    id: 1,
    title: "Breate An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 29,
    image: img1,
    category: "Photography"
  },
  {
    id: 2,
    title: "Design A Website With ThimPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 49,
    image: img2,
    category: "Photography"
  },
  {
    id: 3,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 4,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 5,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 6,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 7,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 8,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 9,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 10,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 11,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 12,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 13,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 14,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 15,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 16,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 17,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 18,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 19,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 20,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 21,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 22,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  },
  {
    id: 23,
    title: "Create An Website With LearnPress",
    author: "Determined-Poitras",
    weeks: 2,
    students: 156,
    price: 0,
    image: img3,
    category: "Photography"
  }
];

const Courses = () => {
const [data, setData] = useState(courses);
    // SEARCH
const handleSearch = (value: string) => {
    if (!value.trim()) {
    setData(courses);
    return;
  }

  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(value.toLowerCase())
  );

  setData(filtered);  

};



  return (
    <section className="featured">

      <div className="featured-header">
        <div className="we">
          <h2>Our Courses</h2>
          <p>Explore our all Courses</p>
        </div>

       
      </div>

      <Flex gap={20} style={{ margin: "20px 0" }}>

       <Search
            
            placeholder="Search mentor"
            onChange={(e) => handleSearch(e.target.value)}
        />

       

      </Flex>

      <div className="courses" >
        {data.map(course => (
          <div key={course.id} className="course-card">

            <div className="course-img">
              <img src={course.image} alt={course.title} />
              <span className="badge"></span>
            </div>

                <div className="course-text">
                    <p className="author">by {course.author}</p>

                    <h3>{course.title}</h3>

                    <div className="course-info">
                      <span>⏱ {course.weeks} Weeks</span>
                      <span>👨‍🎓 {course.students} Students</span>
                    </div>
                </div>
                <span></span>
            <div className="course-footer">
              <span className="price">
                {course.price === 0 ? "Free" : `$${course.price}`}
              </span>
              <button>View More</button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Courses;

