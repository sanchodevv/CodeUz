import { useNavigate } from "react-router-dom";
import Artc1 from "/artc1.png"
import Artc2 from "/artc2.png"
import Artc3 from "/artc3.png"
import "./article.css"


interface Article {
    id: number;
    img: string;
    title: string;
    auth: string;
    text: string;
}
const articles: Article[] = [
    {
        id: 1,
        img: Artc1,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 2,
        img: Artc2,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 3,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
]
const ArticlesBlog = () => {
    const navigate = useNavigate()

    return (
        <section className="articles">
            <div className="articles-header">
                <div className="he">
                    <h2>Latest Articles</h2>
                    <p>Explore our Free Acticles</p>
                </div>

                <button
                  className="all-btn"
                  onClick={() => navigate("/blog")}
                    >
                  All Articles
                </button>
            </div>
            <div className="articles-cards">
                {articles.map(article => (
                    <div className="article-card" key={article.id}>
                        <img src={article.img} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.auth}</p>
                        <p>{article.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default ArticlesBlog;