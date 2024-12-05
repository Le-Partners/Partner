import React, { useEffect, useState } from "react";
import { Star, ThumbsUp, Flame } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]); // State to store posts data

  // Fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/posts");
      setPosts(res.data); // Update the state with fetched posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle single reaction per post
  const handleReaction = (id, type) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        // Reset other reactions and toggle the clicked one
        const newPost = { ...post, liked: false, fired: false, starred: false };
        if (type === "like") {
          newPost.liked = !post.liked;
          newPost.like = post.liked ? post.like - 1 : post.like + 1;
        } else if (type === "fire") {
          newPost.fired = !post.fired;
          newPost.fire = post.fired ? post.fire - 1 : post.fire + 1;
        } else if (type === "star") {
          newPost.starred = !post.starred;
          newPost.star = post.starred ? post.star - 1 : post.star + 1;
        }
        return newPost;
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed-container flex flex-col items-center p-8">
      {posts
        .slice()
        .reverse()
        .map((post) => (
          <div key={post.id} className="w-full md:w-96 mb-8 space-y-4 -translate-x-20 transform">
            {/* Profile Icon and Username */}
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-12 h-12 bg-gray-700 border-none shadow-none rounded-full">
                <AvatarImage
                  src="path_to_profile_image"
                  alt={`${post.username}'s Profile Picture`}
                  className="object-cover rounded-full"
                />
                <AvatarFallback className="bg-gray-700 text-white">
                  {post.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg text-gray-300">@{post.username}</p>
              </div>
            </div>

            {/* Card with Full-Size Post Content */}
            <Card className="w-full h-auto bg-transparent border-none shadow-none">
              <CardContent className="p-0 bg-black">
                <div className="h-72 w-full">
                  <img
                    src={post.content} // Post content as the image URL
                    alt="Post Content"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Caption Section */}
            <div className="mt-2 text-md text-gray-200 text-left w-full">
              <p>{post.message}</p>
            </div>

            {/* Like, Fire, Superstar Buttons */}
            <div className="flex mt-2 space-x-2 items-start w-full">
              {/* Like */}
              <div
                className={`group flex items-center transition-all duration-300 min-w-[2rem] hover:min-w-[5rem] overflow-hidden cursor-pointer ${
                  post.liked ? "text-blue-500" : "text-gray-500"
                }`}
                onClick={() => handleReaction(post.id, "like")}
              >
                <ThumbsUp
                  size={20}
                  className={`${
                    post.liked ? "text-blue-500" : "group-hover:text-blue-500"
                  } transition-colors duration-300`}
                />
                <div
                  className={`ml-2 ${
                    post.liked ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <span
                    className={`${
                      post.liked ? "text-blue-500" : "text-gray-600"
                    } group-hover:text-blue-500 transition-colors duration-300`}
                  >
                    Like ({post.like})
                  </span>
                </div>
              </div>

              {/* Fire */}
              <div
                className={`group flex items-center transition-all duration-300 min-w-[2rem] hover:min-w-[5rem] overflow-hidden cursor-pointer ${
                  post.fired ? "text-red-500" : "text-gray-500"
                }`}
                onClick={() => handleReaction(post.id, "fire")}
              >
                <Flame
                  size={20}
                  className={`${
                    post.fired ? "text-red-500" : "group-hover:text-red-500"
                  } transition-colors duration-300`}
                />
                <div
                  className={`ml-2 ${
                    post.fired ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <span
                    className={`${
                      post.fired ? "text-red-500" : "text-gray-600"
                    } group-hover:text-red-500 transition-colors duration-300`}
                  >
                    Fire ({post.fire})
                  </span>
                </div>
              </div>

              {/* Superstar */}
              <div
                className={`group flex items-center transition-all duration-300 min-w-[2rem] hover:min-w-[6rem] overflow-hidden cursor-pointer ${
                  post.starred ? "text-yellow-500" : "text-gray-500"
                }`}
                onClick={() => handleReaction(post.id, "star")}
              >
                <Star
                  size={20}
                  className={`${
                    post.starred
                      ? "text-yellow-500"
                      : "group-hover:text-yellow-500"
                  } transition-colors duration-300`}
                />
                <div
                  className={`ml-2 ${
                    post.starred ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <span
                    className={`${
                      post.starred ? "text-yellow-500" : "text-gray-600"
                    } group-hover:text-yellow-500 transition-colors duration-300`}
                  >
                    Superstar ({post.star})
                  </span>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="border-t-2 border-gray-300 mt-4 w-full"></div>
          </div>
        ))}
    </div>
  );
};

export default Feed;
