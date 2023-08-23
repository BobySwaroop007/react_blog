import React, { useEffect, useState } from 'react'
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Blog = () => {
    const [blog, setBlog] = useState([]);
      const fetchPost = async () => {
            await getDocs(collection(db, "blog")).then((querySnapshot) => {
              const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              
              setBlog(newData);
              console.log(blog);
            });
          };
        
          useEffect(()=>{
            fetchPost();
        }, [])
  return (
    <>
    <div>
      {blog.map((element, id) => (
        <div key={id}>
          <h3 className='text-center font-bold text-5xl mt-4'>{element.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: element.Content }}  className='m-4'/>
        </div>
      ))}
    </div>
    </>
  )
}

export default Blog




