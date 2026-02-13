import { Link } from "react-router-dom"
import {  menuData,  } from "../../constants/menuData"
import "./aside.css"

const Aside = () => {
    return (
        <aside>
            <div className="aside-logo">
                <img src="/code.png" alt="aside logo" />
                <h1>Code <span>UZ</span></h1>
            </div>
            <div className="aside-navbar">
                {
                    menuData.map((item) => (
                        <Link className="link" to={item.path} key={item.path}> 
                            <img src={item.img} alt="" /> 
                            {item.name}
                        </Link>              
                    ))
                }
            </div>
        </aside>    
    )
}
export default Aside