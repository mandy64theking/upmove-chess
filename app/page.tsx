"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomNavBar from "./customNavBar";

export default function Home() {
  const texts = ["Chess is Art", "Chess is Science", "Chess is Sport", "Chess is Everything!"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-[100vh] object-cover overflow-hidden">
          <source
            src="homepagevid.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <CustomNavBar/>
        <div className="absolute top-20 left-0 h-[70vh] w-[90vw] m-auto z-0 flex items-center justify-center">
          <h1 className="text-white font-bold text-4xl text-center">{texts[currentTextIndex]}</h1>
        </div>
        <div className="absolute flex w-[90vw] mb-2 sm:hidden bottom-14 z-9 justify-center">
          <a href="/book-a-free-trial"><Button className="border-gray cursor-pointer">Join Now! ♟️ </Button></a>
        </div>
      </div>

      <div className="min-h-[90vh] w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="pt-[15vh]">
        <h1 className="text-foreground bg-background font-bold text-4xl text-center">Why Chess?</h1>
        <div className="grid mb-5 sm:grid-cols-2 gap-5">
        <Card className="mt-5 w-[80vw] sm:w-[40vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle>A Game for All Ages</CardTitle>
          <CardDescription>Whether you're a child, a student, or an adult, chess is a lifelong journey of learning and enjoyment. It’s never too early—or too late—to start!</CardDescription>
          </CardHeader>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[40vw] dark:bg-muted">
          <CardHeader>
          <CardTitle>Enhances Critical Thinking</CardTitle>
          <CardDescription>Chess teaches players to think ahead, analyze situations, and make strategic decisions—skills that are essential in academics and real life.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[40vw] dark:bg-muted">
          <CardHeader>
          <CardTitle>Improves Memory & Concentration</CardTitle>
          <CardDescription>With each game, players develop sharper memory and better focus, as they must recall moves, anticipate opponents' strategies, and stay engaged throughout the match.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[40vw] dark:bg-muted">
          <CardHeader>
          <CardTitle>Boosts Academic Performance</CardTitle>
          <CardDescription>Studies show that children who play chess perform better in subjects like mathematics and reading, as the game strengthens logical reasoning and pattern recognition.</CardDescription>
          </CardHeader>
        </Card>
        </div>
      </div>
      </div>

      <div className="min-h-[90vh] w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="pt-[15vh]">
        <h1 className="text-foreground bg-background font-bold text-4xl text-center">Who We Are?</h1>
        <h1 className="text-foreground bg-background font-normal text-center mt-10 max-w-[80vw]"><b>Upmove Chess Academy</b> is a leading chess institute offering personalized mentorship and fun, engaging training for all skill levels. Our expert coaches focus on strategic growth through structured lessons and real-game analysis, making learning both effective and enjoyable! ♟️ </h1>
        <div className="grid mx-auto sm:grid-cols-3 gap-1">
        <Card className="mt-5 w-[80vw] sm:w-[20vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>Students Trained</h1>
            <img src="education.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          
          </CardHeader>
          <CardContent className="font-bold text-center">200+</CardContent>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[20vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>Rated Players Created</h1>
            <img src="chart-646.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          
          </CardHeader>
          <CardContent className="font-bold text-center">20+</CardContent>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[20vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>Hours of Training</h1>
            <img src="clock.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          
          </CardHeader>
          <CardContent className="font-bold text-center">10000+</CardContent>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[20vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>FIDE Rated Trainers!</h1>
            <img src="chess.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          
          </CardHeader>
          <CardContent className="font-bold text-center">5+ Years of Exp.</CardContent>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[20vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>Global Presence</h1>
            <img src="globe.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          
          </CardHeader>
          <CardContent className="font-bold text-center">10+ Countries</CardContent>
        </Card>
        <Card className="mt-5 w-[80vw] sm:w-[20vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>Tournament Victories!</h1>
            <img src="trophy.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          </CardHeader>
          <CardContent className="font-bold text-center">Unlimited</CardContent>
        </Card>
        </div>
      </div>
      </div>

      <div className="min-h-[90vh] w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="pt-[15vh]">
        <h1 className="text-foreground bg-background font-bold text-4xl text-center">What we do?</h1>
        <h1 className="text-foreground bg-background font-normal text-center mt-10 max-w-[70vw] sm:max-w-[90vw]">We offer personalized <b>Group</b> and <b>1-on-1</b> coaching sessions with experienced chess trainers to mentor you. Whether you're a beginner or a seasoned player, we have the expertise to help you reach your full potential.</h1>
        <div className="grid mx-auto sm:grid-cols-3 gap-2">
        <Card className="mt-5 w-[70vw] sm:w-[30vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>Group Classes</h1>
            <img src="group.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          </CardHeader>
          <CardContent className="font-normal text-muted-foreground">An Interactive online class taken with a group of 3 to 6 students following level-wise curriculum!</CardContent>
        </Card>
        <Card className="mt-5 w-[70vw] sm:w-[30vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>1-on-1 Classes</h1>
            <img src="interview.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          </CardHeader>
          <CardContent className="font-normal text-muted-foreground">An Individual online class taken with your trainer following a personalized training plan based on your performance!</CardContent>
        </Card>
        <Card className="mt-5 w-[70vw] sm:w-[30vw] dark:bg-muted">
          <CardHeader> 
          <CardTitle className="flex justify-evenly items-center">
            <h1>Offline Classes</h1>
            <img src="group.png" className="dark:invert max-w-8" alt="" />
          </CardTitle>
          </CardHeader>
          <CardContent className="font-normal text-muted-foreground">An Interactive class taken with a group of students following level-wise curriculum and fun activities!</CardContent>
          <CardFooter className="font-normal text-muted-foreground">At our Offline Centers in Amravati,(M.H)</CardFooter>
        </Card>
        </div>
      </div>
      </div>

      <div className="h-[90vh] w-full flex flex-col sm:flex-row-reverse justify-center items-center">
        <div className="pt-[15vh] flex-1/2 flex flex-col justify-center items-center">
        <h1 className="text-foreground bg-background font-bold text-4xl text-center">Chess off the Board!</h1>
        <h1 className="p-2 pl-10 pr-10 sm:pl-20 sm:pr-20 text-foreground bg-background text-center">At Upmove, we believe in overall development of the students including <b>Sports Psychology, Logical Design Making and Analytical Thinking</b></h1>
        </div>
        <div className="flex-1/2 flex justify-center sm:pt-[15vh] pb-5 dark:invert"><img src="chess-art.png" className="bg-cover rounded-full object-cover max-h-[45vh] w-[45vh] sm:max-h-[55vh] sm:w-[55vh]" alt="Chess Pieces" /></div>
      </div>
      
      <div className="h-[90vh] w-full flex flex-col sm:flex-row justify-center items-center">
        <div className="pt-[15vh] flex-1/2 flex flex-col justify-center items-center">
        <h1 className="text-foreground bg-background font-bold text-4xl text-center">No More Random Puzzles!</h1>
        <h1 className="p-2 pl-10 pr-10 sm:pl-20 sm:pr-20 text-foreground bg-background text-center">At Upmove, we believe in <b>personalized</b> training plans for students, tweaking and changing the plan based on tournament performance</h1>
        </div>
        <div className="flex-1/2 flex justify-center sm:pt-[15vh] pb-5"><img src="chess-piece.jpg" className="bg-cover rounded-full object-cover max-h-[45vh] w-[45vh] sm:max-h-[55vh] sm:w-[55vh]" alt="Chess Pieces" /></div>
      </div>
    </div>
  );
}
