export type MenuItem = {
    path: string
    name: string
    img: string
}


export const menuData: MenuItem[] = [ 
        { 
            path: "/",
            name: "Home",
            img: "/home.png"
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            img: "/dashboard.png"
        },
        {
            path: "/courses",
            name: "Courses",
            img: "/learning.png"
        },
        {

            path: "/mentors",
            name: "Mentors",
            img: "/business.png"
        },
        {
            path: "/blog",
            name: "Blog",
            img: "/computer.png"
        },{
            path: "/contact",
            name: "Contacts",
            img: "/mobile.png"
        }
]
