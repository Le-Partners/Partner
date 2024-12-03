import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Tracker = () => {
  // States to hold goals and progress
  const [calorieGoal, setCalorieGoal] = useState(600);
  const [caloriesBurned, setCaloriesBurned] = useState(450);

  const [stepGoal, setStepGoal] = useState(10000);
  const [stepsTaken, setStepsTaken] = useState(8500);

  const [workoutGoal, setWorkoutGoal] = useState(5);
  const [workoutsCompleted, setWorkoutsCompleted] = useState(3);

  const [hydrationGoal, setHydrationGoal] = useState(8);
  const [waterConsumed, setWaterConsumed] = useState(5);

  const [sleepGoal, setSleepGoal] = useState(8);
  const [hoursSlept, setHoursSlept] = useState(6);

  return (
    <div className="h-screen flex px-4 space-x-4">
      {/* Left Column Cards */}
      <div className="w-1/4 p-4 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center w-full border-b-2 pb-4">
          Set Your Fitness Goals
        </h1>

        {/* Card: Calorie Goal */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Calorie Goal</CardTitle>
            <CardDescription className="text-sm">
              Track your daily calorie burn goal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <input
              type="number"
              value={calorieGoal}
              onChange={(e) => setCalorieGoal(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter calorie goal"
            />
            <input
              type="number"
              value={caloriesBurned}
              onChange={(e) => setCaloriesBurned(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter calories burned"
            />
            <p className="text-sm font-bold">
              {caloriesBurned} / {calorieGoal}
            </p>
          </CardContent>
        </Card>



        {/* Card: Step Goal */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Step Goal</CardTitle>
            <CardDescription className="text-sm">
              Stay active and hit your daily step goal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <input
              type="number"
              value={stepGoal}
              onChange={(e) => setStepGoal(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter step goal"
            />
            <input
              type="number"
              value={stepsTaken}
              onChange={(e) => setStepsTaken(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter steps taken"
            />
            <p className="text-sm font-bold">
              {stepsTaken} / {stepGoal}
            </p>
          </CardContent>
        </Card>



        {/* Card: Workout Goal */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Workout Goal</CardTitle>
            <CardDescription className="text-sm">
              Complete your planned workouts for the day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <input
              type="number"
              value={workoutGoal}
              onChange={(e) => setWorkoutGoal(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter workout goal"
            />
            <input
              type="number"
              value={workoutsCompleted}
              onChange={(e) => setWorkoutsCompleted(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter workouts completed"
            />
            <p className="text-sm font-bold">
              {workoutsCompleted} / {workoutGoal}
            </p>
          </CardContent>
        </Card>
      </div>



      {/* Middle Column Rings */}
      <div className="w-1/2  grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center space-y-1">
          <CircularProgressbar
            value={(caloriesBurned / calorieGoal) * 100}
            text={`${((caloriesBurned / calorieGoal) * 100).toFixed(0)}%`}
            styles={buildStyles({
              pathColor: "blue",
              textColor: "blue",
              trailColor: "#d6d6d6",
            })}
          />
          <p className="text-sm mt-2">Calories Burned</p>
        </div>
        <div className="flex flex-col items-center">
          <CircularProgressbar
            value={(stepsTaken / stepGoal) * 100}
            text={`${((stepsTaken / stepGoal) * 100).toFixed(0)}%`}
            styles={buildStyles({
              pathColor: "green",
              textColor: "green",
              trailColor: "#d6d6d6",
            })}
          />
          <p className="text-sm mt-2">Steps Taken</p>
        </div>
        <div className="flex flex-col items-center">
          <CircularProgressbar
            value={(workoutsCompleted / workoutGoal) * 100}
            text={`${((workoutsCompleted / workoutGoal) * 100).toFixed(0)}%`}
            styles={buildStyles({
              pathColor: "gold",
              textColor: "gold",
              trailColor: "#d6d6d6",
            })}
          />
          <p className="text-sm mt-2">Workouts Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <CircularProgressbar
            value={(waterConsumed / hydrationGoal) * 100}
            text={`${((waterConsumed / hydrationGoal) * 100).toFixed(0)}%`}
            styles={buildStyles({
              pathColor: "aqua",
              textColor: "aqua",
              trailColor: "#d6d6d6",
            })}
          />
          <p className="text-sm mt-2">Water Consumed</p>
        </div>
      </div>



      {/* Right Column cards */}
      <div className="w-1/4 p-4 space-y-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Sleep Goal</CardTitle>
            <CardDescription className="text-sm">
              Track your nightly sleep goal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <input
              type="number"
              value={sleepGoal}
              onChange={(e) => setSleepGoal(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter sleep goal"
            />
            <input
              type="number"
              value={hoursSlept}
              onChange={(e) => setHoursSlept(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter hours slept"
            />
            <p className="text-sm font-bold">
              {hoursSlept} / {sleepGoal} hours
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Hydration Goal</CardTitle>
            <CardDescription className="text-sm">
              Ensure you're drinking enough water daily.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <input
              type="number"
              value={hydrationGoal}
              onChange={(e) => setHydrationGoal(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter hydration goal"
            />
            <input
              type="number"
              value={waterConsumed}
              onChange={(e) => setWaterConsumed(Number(e.target.value))}
              className="p-2 border bg-white border-gray-300 rounded text-sm mb-4 w-full"
              placeholder="Enter water consumed"
            />
            <p className="text-sm font-bold">
              {waterConsumed} / {hydrationGoal} glasses
            </p>
          </CardContent>
        </Card>
      </div>
    </div>

  );
};

export default Tracker;
