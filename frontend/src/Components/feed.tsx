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

      // Sort posts by date_time 
      const sortedPosts = res.data.sort((a, b) => 
        new Date(b.date_time) - new Date(a.date_time)
      );

      setPosts(sortedPosts); // Update the state with sorted posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle single reaction per post
  const handleReaction = (index, type) => {
    const updatedPosts = [...posts];

    if (type === "like") {
      if (updatedPosts[index].liked) {
        updatedPosts[index].like -= 1;
        updatedPosts[index].liked = false;
      } else {
        updatedPosts[index].like += 1;
        updatedPosts[index].liked = true;

        // Reset other reactions
        if (updatedPosts[index].fired) {
          updatedPosts[index].fire -= 1;
          updatedPosts[index].fired = false;
        }
        if (updatedPosts[index].starred) {
          updatedPosts[index].star -= 1;
          updatedPosts[index].starred = false;
        }
      }
    } else if (type === "fire") {
      if (updatedPosts[index].fired) {
        updatedPosts[index].fire -= 1;
        updatedPosts[index].fired = false;
      } else {
        updatedPosts[index].fire += 1;
        updatedPosts[index].fired = true;

        // Reset other reactions
        if (updatedPosts[index].liked) {
          updatedPosts[index].like -= 1;
          updatedPosts[index].liked = false;
        }
        if (updatedPosts[index].starred) {
          updatedPosts[index].star -= 1;
          updatedPosts[index].starred = false;
        }
      }
    } else if (type === "star") {
      if (updatedPosts[index].starred) {
        updatedPosts[index].star -= 1;
        updatedPosts[index].starred = false;
      } else {
        updatedPosts[index].star += 1;
        updatedPosts[index].starred = true;

        // Reset other reactions
        if (updatedPosts[index].liked) {
          updatedPosts[index].like -= 1;
          updatedPosts[index].liked = false;
        }
        if (updatedPosts[index].fired) {
          updatedPosts[index].fire -= 1;
          updatedPosts[index].fired = false;
        }
      }
    }

    setPosts(updatedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed-container flex flex-col items-center p-8">
      {posts.map((post, index) => (
        <div key={index} className="w-full md:w-96 mb-8 space-y-4 -translate-x-20 transform">
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
              onClick={() => handleReaction(index, "like")}
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
              onClick={() => handleReaction(index, "fire")}
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
              onClick={() => handleReaction(index, "star")}
            >
              <Star
                size={20}
                className={`${
                  post.starred ? "text-yellow-500" : "group-hover:text-yellow-500"
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
                  Superstar! ({post.star})
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
