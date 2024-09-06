import React, { useEffect, useState } from "react";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Flag,
  Clock,
  ChevronRight,
} from "lucide-react";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const storedRecipe = JSON.parse(sessionStorage.getItem("selectedRecipe"));
    if (!storedRecipe || !storedRecipe._id) {
      console.error("Recipe not found in sessionStorage");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1001/api/recipe/${storedRecipe._id}`
        );
        const data = response.data;
        setRecipe(data);
        setLikes(data.ratings[0]?.likes?.length || 0);
        // Check if the user has liked this recipe before
        const isLiked =
          localStorage.getItem(`liked_${storedRecipe._id}`) === "true";
        setIsLiked(isLiked);
        setComments(data.ratings[0]?.comments || []);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await axios.put(
          `http://localhost:1001/api/recipe/${recipe._id}/comment`,
          {
            text: newComment,
            parentId: replyTo,
          }
        );
        setComments(response.data);
        setNewComment("");
        setReplyTo(null);
      } catch (error) {
        console.error("Failed to post comment:", error);
      }
    }
  };

  const handleReply = (commentId) => {
    setReplyTo(commentId);
  };

  const handleLike = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1001/api/recipe/${recipe._id}/like`
      );
      setLikes(response.data.likes);
      const newLikeState = !isLiked;
      setIsLiked(newLikeState);
      // Store the like state in localStorage
      localStorage.setItem(`liked_${recipe._id}`, newLikeState.toString());
    } catch (error) {
      console.error("Failed to update like:", error);
    }
  };
  const handleShare = async () => {
    try {
      await axios.put(`http://localhost:1001/api/recipe/${recipe._id}/share`);

      if (navigator.share) {
        navigator
          .share({
            title: recipe.title,
            text: `Check out this recipe: ${recipe.title}`,
            url: window.location.href,
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      } else {
        console.log("Web Share API is not supported in your browser.");
      }
    } catch (error) {
      console.error("Failed to share recipe:", error);
    }
  };

  const handleReport = () => {
    MySwal.fire({
      title: "Report this dish",
      input: "select",
      inputOptions: {
        inappropriate: "Inappropriate",
        offensive: "Offensive",
        spam: "Spam",
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
          return axios
            .put(`http://localhost:1001/api/recipe/${recipe._id}/report`, {
              reason,
            })
            .then((response) => {
              if (response.status !== 200) {
                throw new Error(response.statusText);
              }
              return response.data;
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
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

  if (!recipe)
    return <div className="text-center p-8 text-gray-600">Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="relative">
          {recipe.images && recipe.images.length > 0 && (
            <img
              src={recipe.images[0]}
              alt={recipe.title}
              className="w-full h-80 object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <h1 className="absolute bottom-4 left-6 text-4xl font-bold text-white">
            {recipe.title}
          </h1>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{recipe.cookingTime} minutes</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 ${
                  isLiked ? "text-pink-500" : "text-gray-600"
                } hover:text-pink-500 transition`}
              >
                <ThumbsUp className="w-5 h-5" />
                <span>{likes}</span>
              </button>
              <button
                onClick={handleShare}
                className="text-gray-600 hover:text-blue-500 transition"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={handleReport}
                className="text-gray-600 hover:text-red-500 transition"
              >
                <Flag className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 mr-2 text-green-500" />
                    <span>
                      {ingredient.name} - {ingredient.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Instructions
              </h2>
              <p className="text-gray-700 whitespace-pre-line">
                {recipe.instructions}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ></textarea>
          {replyTo !== null && (
            <div className="mt-2 text-sm text-gray-600">
              Replying to comment ID: {replyTo}
              <button
                onClick={() => setReplyTo(null)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                Cancel
              </button>
            </div>
          )}
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {replyTo === null ? "Post Comment" : "Send Reply"}
          </button>
        </form>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment._id} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">{comment.user.name}</p>
              <p className="text-gray-800 mb-2">{comment.text}</p>
              <button
                onClick={() => handleReply(comment._id)}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                <MessageSquare className="w-4 h-4 mr-1" /> Reply
              </button>
              {comment.replies &&
                comment.replies.map((reply) => (
                  <div
                    key={reply._id}
                    className="ml-4 mt-2 bg-white p-3 rounded-lg border-l-2 border-blue-400"
                  >
                    <p className="text-gray-700">{reply.text}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
