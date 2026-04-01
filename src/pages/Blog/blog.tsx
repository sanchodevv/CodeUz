import Artc1 from "/artc1.png"
import Artc2 from "/artc2.png"
import Artc3 from "/artc3.png"
import "./blog.css"

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
    {
        id: 4,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 5,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 6,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 7,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 8,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 9,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 10,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 11,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 12,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 13,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
    {
        id: 14,
        img: Artc3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        auth: "📅 Jan 24, 22023",
        text: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    },
]

const Blog = () => {
    return (
        <section className="articles">
            <div className="articles-header">
                <div className="he">
                    <h2>Our Blog Articles</h2>
                    <p>Explore our Free Acticles</p>
                </div>

                
            </div>
            <div className="articles-cardss">
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
export default Blog;