import { useState, useEffect } from 'react';
import React from "react";
import '../App.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function Landing() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const res = await axios.get("http://localhost:8080/api")
    console.log(res.data.dummy)
  }

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:8080/users");
    console.log(res.data);
    setCount((count) => res.data.length);

  }

  useEffect(() => {
    fetchAPI();
    document.documentElement.classList.add("dark");
  }, [])

  return (
    <React.Fragment>
      <div className="flex w-full h-full p-2 flex-row align-middle items-center">
        <Button onClick={() => fetchUsers()} variant="ghost" className="w-28 h-28 flex items-center justify-center">
          Click me!
        </Button>
        <p>
          Number of users: {count}
        </p>
      </div>

    </React.Fragment>
  )
}

export default Landing
