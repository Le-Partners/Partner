import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [caption, setCaption] = useState('');
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(''); // trracks media type 
  const navigate = useNavigate();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.startsWith("video") ? "video" : "image";
      setMediaType(fileType);

      // allows a preview URL for media
      setMedia(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you add code to save the new post data.
    // like send it to db.
    
    
    //redirects to the Feed page
    navigate('/home');
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
          <label className="block text-lg font-medium text-white-700 mb-2">Upload an Image or Video</label>
          <input
            type="file"

            // Allows both images and videos
            accept="image/*,video/*" 
            onChange={handleMediaChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
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
