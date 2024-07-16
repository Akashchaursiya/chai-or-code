import { createContext, useReducer } from "react";


const DEFAULT_POST_LIST = [
    {
      id: "1",
      title: "Gogin mumbai",
      body: "Enjoy in Mumbai All fevariote lacedd ",
      reactions: 13,
      userId: "user_07",
      tag: ["Enjoy"],
    },
    {
        id: "3",
        title: " Apple",
        body: "Enjoy in Mumbai All fevariote lacedd ",
        reactions: 1,
        userId: "user_07",
        tag: ["Enjoy"],
      },
    
  ];

export const Postlist = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: (postId) => {
    console.log(`postiid ${postId}`)
  },
});

const postlistReducer = (currPostlist, action) => {
    let newPostlist = currPostlist;
    if(action.type === "DELETE_POST"){
        newPostlist = currPostlist.filter(
            (post) => post.id !== action.payload.postId
        );
    } else if (action.type === "ADD_POST"){
        newPostlist = [action.payload, ...currPostlist]
    }
  return newPostlist;
};

const PostlistProvider = ({ children }) => {
    const [postlist, dispatchPostlist] = useReducer(postlistReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostlist({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                reactions: postBody,
                userId: reactions,
                tag: tags,
            },
        })
    };

  const deletePost = (postId) => {
       dispatchPostlist  ({
        type: "DELETE_POST",
        payload: {
        postId,
        },
       });
  };


  return (
    <Postlist.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};



export default PostlistProvider;
