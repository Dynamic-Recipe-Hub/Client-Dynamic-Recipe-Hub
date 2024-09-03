import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp, FaComment, FaShare, FaFlag } from "react-icons/fa";

const Recipesdetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const storedRecipe = JSON.parse(sessionStorage.getItem("selectedRecipe"));
    if (storedRecipe && storedRecipe.id === id) {
      setRecipe(storedRecipe);
      setLikes(storedRecipe.likes || 0);
      setIsLiked(storedRecipe.userHasLiked || false);
      setComments(storedRecipe.comments || []); // Assuming comments are stored with the recipe
    }
  }, [id]);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(), // Simple unique ID for demonstration
        text: newComment,
        replies: [],
        parentId: replyTo,
      };
      setComments([...comments, comment]);
      setNewComment("");
      setReplyTo(null);
      // Here you would typically send this comment to your backend
    }
  };
  const handleReply = (commentId) => {
    setReplyTo(commentId);
  };

  // Function to handle like action
  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      // Here you would typically send a request to the server to update likes
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
      // Send request to server to unlike
    }
  };

  // Placeholder functions for other interactions
  const handleComment = () => {
    console.log("Comment functionality to be implemented");
    // Implement comment logic here
  };

  const handleShare = () => {
    console.log("Share functionality to be implemented");
    // Implement share logic here, possibly using navigator.share if available
  };

  const handleReport = () => {
    console.log("Report functionality to be implemented");
    // Implement report logic here
  };

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        {recipe.title}
      </h1>
      <img
        src={recipe.images[0]}
        alt={recipe.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
      <p>{recipe.instructions}</p>
      <h2 className="text-2xl font-semibold mb-4">Cooking Time</h2>
      <p>{recipe.cookingTime} minutes</p>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button onClick={handleLike} className="flex items-center space-x-2">
          <FaThumbsUp color={isLiked ? "blue" : "gray"} />
          <span>{likes}</span>
        </button>
        <button onClick={handleComment} className="flex items-center space-x-2">
          <FaComment /> <span>Comment</span>
        </button>
        <button onClick={handleShare} className="flex items-center space-x-2">
          <FaShare /> <span>Share</span>
        </button>
        <button onClick={handleReport} className="flex items-center space-x-2">
          <FaFlag /> <span>Report</span>
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded"
          ></textarea>
          {replyTo !== null && (
            <div>
              Replying to comment ID: {replyTo}
              <button onClick={() => setReplyTo(null)}>Cancel</button>
            </div>
          )}
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {replyTo === null ? "Comment" : "Reply"}
          </button>
        </form>
        <div className="mt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-4 border p-2 rounded">
              <p>{comment.text}</p>
              <button
                onClick={() => handleReply(comment.id)}
                className="text-sm text-blue-500"
              >
                <FaReply /> Reply
              </button>
              {comment.replies.map((reply) => (
                <div key={reply.id} className="ml-4 mt-2 border-l-2 pl-2">
                  <p>{reply.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipesdetail;
