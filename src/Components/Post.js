import React, { useRef, useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import JoditEditor from 'jodit-react';
import { serverTimestamp } from "firebase/firestore";
import { db } from '../Firebase';
import { useDispatch } from 'react-redux';

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  //defaultActionOnPaste: "insert_clear_html",
  // buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true
  },
  width: 1265,
  height: 442
};
const Post = () => {
  const dispatch = useDispatch();
    const editor =useRef(null);
    const [Title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [cat, setCat] = useState("");
    const [category, setcategory] = useState("");
  
    
const handleSubmit = (e) =>{
e.preventDefault();
if(Title == '' || content == '' || cat == ''){
  alert("form filled!");
}
else{
  let collectionName = "";
          if (cat === "blog") {
            collectionName = "blog";
          } else if (cat === "magazine") {
            collectionName = "magazine";
          } else if (cat === "interview") {
            collectionName = "interview";
          }
  var c = document.getElementById("ab").innerHTML =`<div>${content}</div>`;
  addDoc(collection(db, collectionName), {
   title:Title,
   Content:content,
   category:cat,
    date: serverTimestamp()
  }).then((res)=>{
    alert("post add");
      // Clear the form inputs
      setTitle('');
      setContent('');
      setCat('');
    console.log(res);
  }).catch((err)=>{
    alert(err);
  })
}
}
  const handleChange = (e) =>{
    setCat(e.target.value);
    if(e.target.value == "blog"){
      setcategory("blog")
    }
    else if(e.target.value == "magazine"){
      setcategory("magazine")
    }
    else if(e.target.value == "interview"){
      setcategory("interview")
    }
  }
  return (
    <>


<section class=" py-1 bg-blueGray-50">
<div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          My Post
         </h6>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Blogs
        </h6>
        <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Post Category
              </label>
              <select id="countries" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a Post</option>
        <option value="blog">Blog</option>
        <option value="magazine">Magzine</option>
        <option value="interview">Interviews</option>

    </select>
            </div>
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Post Title
              </label>
              <input type="text" onChange={(e)=>{setTitle(e.target.value)}}  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
          </div>
       
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="content">
                Post Content
              </label>
              <JoditEditor
  value={content}
  config={editorConfig}
  onChange={(value) => setContent(value)} // Update this line
/>
            </div>
          </div>
          {category == "blog" ? (
              <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Tags
              </label>
              <input type="text"  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
          )
          : ''}
        
          {/* <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Post Category
              </label>
              <select id="countries" onChange={(e)=>{setCat(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a Post</option>
        <option value="blog">Blog</option>
        <option value="magazine">Magzine</option>
        <option value="interview">Interviews</option>

    </select>
            </div>
          </div> */}
         <button onClick={handleSubmit} class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
          Create Post
        </button>
        </div>

        {/* <hr class="mt-6 border-b-1 border-blueGray-300"> */}


      
      </form>
    </div>
  </div>
{/* <h1>{content}</h1> */}
<p id="ab"></p>
</div>
</section>

    </>
  )
}

export default Post