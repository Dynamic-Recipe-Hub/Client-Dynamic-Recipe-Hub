import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import Swal
import withReactContent from "sweetalert2-react-content";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaFlag,
  FaReply,
} from "react-icons/fa";

const MySwal = withReactContent(Swal);

const DishDetail = () => {
  const [dessert, setDessert] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  useEffect(() => {
    const dessertData = JSON.parse(sessionStorage.getItem("selectedDessert"));
    if (dessertData) {
      setDessert(dessertData);
      setLikes(dessertData.likes || 0);
      setIsLiked(dessertData.userHasLiked || false);
      setComments(dessertData.comments || []);
    }
  }, []);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
      // Update like on the server
    } else {
      setLikes(likes - 1);
      setIsLiked(false);
      // Update unlike on the server
    }
  };

  const handleReport = () => {
    MySwal.fire({
      title: "Report this dish",
      input: "select",
      inputOptions: {
        inappropriateContent: "Inappropriate Content",
        incorrectInfo: "Incorrect Information",
        other: "Other",
      },
      inputPlaceholder: "Select a reason",
      showCancelButton: true,
      confirmButtonText: "Submit Report",
      showLoaderOnConfirm: true,
      preConfirm: (reason) => {
        if (!reason) {
          Swal.showValidationMessage("Please select a reason for reporting");
        } else {
          return new Promise((resolve) => {
            // Here you would typically send the report to your server
            setTimeout(() => {
              resolve();
            }, 2000); // Simulating server delay
          });
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          icon: "success",
          title: "Thank you for your report!",
          text: "We will review this dish based on your feedback.",
        });
      }
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
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

  if (!dessert) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        {dessert.name}
      </h1>
      <img
        src={dessert.images[0]}
        alt={dessert.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-2xl font-semibold mb-4">Description</h2>
      <p className="mb-4">{dessert.description}</p>
      <h2 className="text-2xl font-semibold mb-4">Price</h2>
      <p className="mb-4">${dessert.price.toFixed(2)}</p>
      <h2 className="text-2xl font-semibold mb-4">Available Quantity</h2>
      <p className="mb-4">{dessert.availableQuantity}</p>
      <h2 className="text-2xl font-semibold mb-4">Size</h2>
      <p className="mb-4">{dessert.size}</p>
      <h2 className="text-2xl font-semibold mb-4">Cuisine</h2>
      <p className="mb-4">{dessert.cuisine}</p>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button onClick={handleLike} className="flex items-center space-x-2">
          <FaThumbsUp color={isLiked ? "blue" : "gray"} />
          <span>{likes}</span>
        </button>
        <button
          onClick={() => console.log("Comment functionality to be implemented")}
          className="flex items-center space-x-2"
        >
          <FaComment /> <span>Comment</span>
        </button>
        <button
          onClick={() => console.log("Share functionality to be implemented")}
          className="flex items-center space-x-2"
        >
          <FaShare /> <span>Share</span>
        </button>
        <button onClick={handleReport} className="flex items-center space-x-2">
          <FaFlag /> <span>Report</span>
        </button>
      </div>

      {/* Comments Section */}
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

export default DishDetail;
