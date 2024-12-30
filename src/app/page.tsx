"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060507] text-customWhite">
      <TextGenerateEffect
        words="Remindr."
        className="text-5xl tracking-tight font-bold"
      />
      <TextGenerateEffect
        words="Remind to Grind"
        className="text-xl font-semibold"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex flex-col gap-4 mt-6 "
      >
        <Button className="p-4 bg-customWhite text-black hover:bg-gray-800 hover:text-customWhite">Get Started</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="p-4 bg-gray-800 text-customWhite text-sm sm:text-base">
              About Remindr.
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90vw] max-w-[425px] sm:max-w-[550px] p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl font-semibold">
                About Remindr.
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-sm sm:text-base">
                Remindr. helps you to be consistent with your daily goals. Whether it is fitness, coding, or any other, 
                this app will help you to stay on track. No Credit Card Required. All. For. Free.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
}
