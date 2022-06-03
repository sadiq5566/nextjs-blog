import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as fs from "fs"
const Post = (props) => {



    const [blog, setBlog] = useState(props.myBlog)





    return (
        <div>

            <h1>{blog && blog.title}</h1>
            <hr />
            <p>{blog && blog.content}</p>
        </div>
    )
}

export default Post


// export async function getServerSideProps(context) {
//     const { slug } = context.query
//     let data = await fetch(`http://localhost:3000/api/getblog/?slug=${slug}`)
//     let myBlog = await data.json()

//     return {
//         props: { myBlog },
//     }
// }

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    slug: "how-to-learn-flask"
                }
            },
            {
                params: {
                    slug: "how-to-learn-javascript"
                }
            },
            {
                params: {
                    slug: "how-to-learn-nextjs"
                }
            }
        ],
        fallback: true // false or 'blocking'
    };
}
export async function getStaticProps(context) {
    const { slug } = context.params
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf8')

    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

