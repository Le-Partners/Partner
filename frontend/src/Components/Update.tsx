import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import axios from 'axios';

// Neccessary stuff for ImageKit
const urlEndpoint = 'https://ik.imagekit.io/83imtx286'
const publicKey = 'public_bGhKDN0oFvrNYpH4gM9gB+FWG9E=';
const authenticator =  async () => {
    try {
        const response = await fetch('http://localhost:8080/auth');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

var contentUrl






function Update() {
  const [content, setContent] = useState('')
  const [caption, setCaption] = useState('');
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(''); // trracks media type
  const navigate = useNavigate();

  // Handles form  submit
  const handleSubmit = (e) => {
    e.preventDefault();

    submitPost();

    console.log("Submitted post?")

    //redirects to the Feed page
    navigate('/home');
  };

  // Function that does an api request to backend to submit user post
  const submitPost = async () => {
    const postEndPoint = "http://localhost:8080/posts"
    // Builds the posts schema
    const postData = {
      username: localStorage.getItem("user"),
      message: caption,
      uid: localStorage.getItem("uid"),
      content: content,
    }

    try {
      const res = await fetch(postEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      const responseData = await res.json(); // Parse JSON response
      console.log('Post created:', responseData);
      return responseData;

    } catch (error) {
      console.error("Error posting post:", error);
      throw error
    }
  };

  const onError = err => {
    console.log("Error", err);
  };

  const onSuccess = res => {
    console.log("Success", res);
    setContent(res.url);
  };

  return (
    <div className="update-container p-8 flex flex-col items-center space-y-8">
      {/* Big message */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-8">
        Let's Update Your Friends on Your Journey!
      </h1>

      {/* handles media upload and the caption */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">

        {/* Media upload */}
        <div>
          {/* ImageKit component that takes the uploaded image and hosts it and returns url of hosted image */}
          <IKContext urlEndpoint={urlEndpoint} publicKey={publicKey} authenticator={authenticator}>
            <p>Upload an image</p>
            <IKUpload
              fileName="test-upload.png"
              onError={onError}
              onSuccess={onSuccess}
            />
          </IKContext>
        </div>

        {/* preview */}
        {media && (
          <div className="media-preview mt-4">

            <p className="text-white-700 mb-2"> Preview:</p>
            {mediaType === 'image' ? (
              <img src={media} alt="Preview" className="w-full h-60 object-cover rounded-md" />
            ) : (
              <video src={media} controls className="w-full h-60 rounded-md" />
            )}
          </div>
        )}

        {/* Caption */}
        <div>
          <label className="block text-lg font-medium text-white-700 mb-2">Add a Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Write a caption for your post..."
          ></textarea>
        </div>

        {/* Submit button */}
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
          Share Update
        </button>
      </form>
    </div>
  );
}

export default Update;
