import { useNavigate } from "react-router-dom";
import img1 from "/course1.png";
import img2 from "/course2.png";
import img3 from "/course3.png";
import "./features.css"

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
    title: "Create An Website With LearnPress",
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
  }
];

const FeaturedCourses = () => {

  const navigate = useNavigate();

  return (
    <section className="featured">

      <div className="featured-header">
        <div className="we">
          <h2>Featured Courses</h2>
          <p>Explore our Popular Courses</p>
        </div>

        <button
          className="all-btn"
          onClick={() => navigate("/courses")}
        >
          All Courses
        </button>
      </div>

      <div className="courses-grid">
        {courses.map(course => (
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

export default FeaturedCourses;

