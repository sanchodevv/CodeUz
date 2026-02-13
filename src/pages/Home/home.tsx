import { useNavigate } from "react-router-dom";
import Categories from "./Category/category"
import FeaturedCourses from "./Features/features"

import "./home.css"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div className="intro">
                <div className="intro-info">
                    <h1>Build Skills with 
                        Online Course
                    </h1>
                    <p>
                        We denounce with righteous indignation and dislike men who 
                        are so beguiled and demoralized that cannot trouble.
                        And If you follow us you will not dissapointed and you'll like it.
                    </p>
                    <button>Posts Comments</button>
                </div>
                <div className="intro-img">
                    <img src="/back.png" alt="" />
                </div>
            </div>
            <div className="categoriess">
                <Categories />
            </div>
            <div className="coursess">
                <FeaturedCourses />
            </div>
            <div className="dash">
                <div className="dash-card">
                    <h3>20k+</h3>
                    <p>Active Students</p>
                </div>
                <div className="dash-card">
                    <h3>200+</h3>
                    <p>Total Courses </p>
                </div>
                <div className="dash-card">
                    <h3>158</h3>
                    <p>Insturkor</p>
                </div>
                <div className="dash-card">
                    <h3>100%</h3>
                    <p>Satisfaction rate</p>
                </div>
            </div>
            <div onClick={() => navigate("/dashboard")} className="dash-btn">See Dashboard</div>
            <div className="grow">
                <div className="grow-img">
                    <img src="/Vector (6).png" alt="" />
                </div>
                <div className="grow-info">
                    <h1>
                        Grow your skill 
                        with Professional Mentors
                    </h1>
                    <p>
                        We denounce with righteous indignation and dislike men who 
                        are so beguiled and demoralized that cannot trouble.
                    </p>
                    <ul>
                        <li> ✅ Certification</li>
                        <li> ✅ Certification</li>
                        <li> ✅ Certification</li>
                        <li> ✅ Certification</li>
                        <button onClick={() => navigate("/mentors")}> See Mentors</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home