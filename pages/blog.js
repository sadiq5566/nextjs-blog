import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs)

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Hunting Coder
            </h1>

            <p className={styles.description}>
                Blog For hunting Coders for help in programming
            </p>
            <h2>Popular Blogs</h2>
            {blogs.map((blog) => {
                return (
                    <div className={styles.grid} key={blog.slug}>

                        <br />
                        <Link href={`/blogpost/${blog.slug}`}><a>
                            <h3>{blog.title}</h3>
                        </a></Link>
                        <p>{blog.content.substr(0, 400)}</p>
                    </div>);

            })}



        </main>

    )
}

export default Blog
// export async function getServerSideProps(context) {
//     let data = await fetch(`http://localhost:3000/api/blogs`)
//     let allBlogs = await data.json()

//     return {
//         props: { allBlogs },
//     }
// }
export async function getStaticProps(context) {
    let data = await fetch(`http://localhost:3000/api/blogs`)
    let allBlogs = await data.json()

    return {
        props: { allBlogs },
    }
}