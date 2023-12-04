import React, { useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'
import Spinner from './Spinner'


const Blogs = () => {

    const { posts, loading } = useContext(AppContext)
    console.log("printing post")
    console.log(posts)
    return (
        <div className='m-20 text-sm w-4/12'>
            {
                loading ?

                    (<Spinner/>) :

                    (posts.length === 0 ?
                        (
                            <div>
                                <p>No Post Found</p>
                            </div>
                        ) :
                        (
                            posts.map((post) => (
                                <div key={post.id}>
                                    <p className='font-bold py-2'>{post.title}</p>
                                    
                                    <p>
                                        By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
                                    </p>

                                    <p className='font-sm py-1' >Posted On <span className='text-sm italic '>{post.date}</span></p>

                                    <p className='my-3'>{post.content}</p>

                                    <p className='cursor-pointer text-sm text-blue-600 font-bold underline mb-5'>
                                        {post.tags.map((tag,index) => {
                                            return <span key={index} className='mx-1'>
                                                {`#${tag}`}
                                            </span>
                                        })}
                                    </p>
                                </div>
                            ))
                        ))
            }
        </div>
    )
}

export default Blogs