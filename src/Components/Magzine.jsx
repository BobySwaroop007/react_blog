import React, { useEffect, useState } from 'react'
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
const Magzine = () => {
    const [magzine, setMagzine] = useState([]);
      const fetchPost = async () => {
            await getDocs(collection(db, "magazine")).then((querySnapshot) => {
              const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }));
              
              setMagzine(newData);
              console.log(magzine);
            });
          };
        
          useEffect(()=>{
            fetchPost();
        }, [])
  return (
    <>
    <div>
      {magzine.map((element, id) => (
        <div key={id}>
          <h3 className='text-center font-bold text-5xl mt-4'>{element.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: element.Content }} className='text-red-700 m-5' />
        </div>
      ))}
    </div>
    </>
  )
}

export default Magzine