import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GetUserInfo() {
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save the information (e.g., send it to your backend or Firebase)
    postUser()

    // Redirect to the home page after saving
    navigate("/home");
  };

  const postUser = async () => {
    const endPoint = 'http://localhost:8080/users'

    const userData = {
      username: username,
      birthday: birthday,
      gender: gender,
      bio: bio,
      uid: localStorage.getItem('uid'),
      experience: level,
    }

    try{
      const res = await axios.post(endPoint, userData, {
        headers: {'Content-Type': 'application/json',},
      })

      console.log("User created", res.data)
    }catch (e){
      console.error("error:", e.message)
      throw e
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-2xl font-bold mb-4">Tell Your Partners a little about yourself!</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md  p-6 rounded-lg shadow-lg"
      >
        {/* Username */}
        <div className="mb-4">
          <label className="block text-white-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-white-300 rounded-lg"
            required
          />
        </div>

        {/* Birthday */}
        <div className="mb-4">
          <label className="block text-white-700">Birthday:</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-white-700">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Non-Binary</option>
            <option value="preferNotToSay">Prefer Not to Say</option>
          </select>
        </div>

         {/* Workout level */}
         <div className="mb-4">
          <label className="block text-white-700">Workout Experience:</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Workout level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block text-white-700">Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Tell us something about yourself..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}
