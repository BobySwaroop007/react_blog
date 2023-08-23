import React, { useEffect, useState } from 'react'
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Interviews = () => {
    const [interview, setinterview] = useState([]);
      const fetchPost = async () => {
            await getDocs(collection(db, "interview")).then((querySnapshot) => {
              const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              
              setinterview(newData);
              console.log(interview);
            });
          };
        
          useEffect(()=>{
            fetchPost();
        }, [])
  return (
    <>
     <div>
      {interview.map((element, id) => (
        <div key={id}>
          <h3 className='text-center font-bold text-5xl mt-4'>{element.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: element.Content }}  />
        </div>
      ))}
    </div>
    </>
  )
}

export default Interviews