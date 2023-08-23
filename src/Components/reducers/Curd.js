
import { Add_data } from "../action/action";


const initialState = []; // Initial state should be an array, assuming you're storing an array of blogs

const All_blogs = (state = initialState, action) => {
  
  switch (action.type) {
    case Add_data:
      // Add a new blog to Firebase
      
      // addDoc(collection(db, "blog"), action.payload);
      alert('data add');
       // Assuming action.payload is the new blog data
      return [...state, action.payload];
    
      

    // case "SHOW":
    //   // Fetch blogs from Firebase
    //   getDocs(collection(db, "blog"))
    //     .then((querySnapshot) => {
    //       const newData = querySnapshot.docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id,
    //       }));
    //       console.log(newData);


    //       // If you want to update the state with the fetched data
    //       return newData;
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching blogs:", error);
    //       return state; // Return the current state in case of an error
    //     });

    default:
      return state;
  }
};

export default All_blogs;
