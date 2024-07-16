import { useContext, useRef } from "react";
import { Postlist } from "../store/Ppost-list-store";
// import { addPost }

const CreatePost = () => {
  const { addPost } = useContext(Postlist);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();


   const handleSubmit =  (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postBodyElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postBodyElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
   };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3"> 
      <label htmlFor="userId" className="form-label">
          User Id:
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your user id"
        />
  
        <label htmlFor="title" className="form-label">
          Post Title:
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feel today"
        />
      <label htmlFor="body" className="form-label">
          Post Content:
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"      className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
       <label htmlFor="reactions" className="form-label">
         Number of Reactions:
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How to many pepole react"
        />
         <label htmlFor="tag" className="form-label">
         Enter your hastag here:
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tag"
          placeholder="Please enter tag using space "
        />
      </div>
      <button type="Submit" className="btn btn-primary">
       Post
      </button>
    </form>
  );
};

export default CreatePost;
