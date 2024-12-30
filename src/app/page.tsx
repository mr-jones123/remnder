"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
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
      <motion.div initial={{ scale : 0}} animate = {{scale: 1}} transition={{ ease: "easeInOut", duration: 1 }} className="flex flex-col gap-4 mt-6 ">
        <Button className="p-4 bg-customWhite text-black">Get Started</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="p-4 bg-gray-800 text-customWhite">About Remindr.</Button>
          </DialogTrigger>
          <DialogContent>
            
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
}
