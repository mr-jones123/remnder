"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from 'lucide-react';
export default function GetStarted() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-customWhite">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <BackgroundGradient className="rounded-[22px] min-h-40 min-w-40 p-3 bg-black flex flex-col">
            <Card className="bg-black text-customWhite border-none">
              <CardHeader>
                <CardTitle className="text-xl">GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                Having a contribution streak on GitHub makes your account green. It is a flex. {" "}
                <span className="font-bold text-grey flex items-center align-baseline underline">
                  <a href="https://youtu.be/r6tH55syq0o?si=CJm6hZk3Tqt7NYsv&t=233">
                    Just ask this guy
                  </a>
                  <SquareArrowOutUpRight size={17} />
            
                </span>
                
              </CardContent>
            </Card>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] min-h-40 min-w-40 p-3 bg-black flex">
            <Card className="bg-black text-customWhite border-none">
              <CardHeader>
                <CardTitle className="text-xl">LeetCode</CardTitle>
              </CardHeader>
              <CardContent>
                Being consistent in Leetcode can sharpen your skills in Data Strcutures and Algorithms and land 
                you a job at a big-tech company. Join the Leetcode clan now.
              </CardContent>
            </Card>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] min-h-40 min-w-40 p-3 bg-black flex">
            <Card className="bg-black text-customWhite border-none">
              <CardHeader>
                <CardTitle className="text-xl">Gym</CardTitle>
              </CardHeader>
              <CardContent>
                Grind and you can become like 
                
                <span className="font-bold text-grey flex items-center align-baseline underline">
                  <a href="https://www.youtube.com/@NoelDeyzel">
                  Daddy Noel. 
                  </a>
                  <SquareArrowOutUpRight size={17} />
                  
                </span>
              </CardContent>
            </Card>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
