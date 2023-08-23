// export const Add_data = (blog) => async (dispatch) => {
//     try {
//         const docRef = await addDoc(collection(db, "blogs"), blog);
//         dispatch({
//           type: ADD_BLOG,
//           payload: { ...blog, id: docRef.id },
//         });
//       } catch (error) {
//         console.error("Error adding blog:", error);
//       }
// }
// export const Show = () =>{
//     return {
//         type: "SHOW",
//         // payload: num
//        }
// }