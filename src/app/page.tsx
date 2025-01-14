"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-customWhite">
      <TextGenerateEffect
        words="Remindr."
        className="text-5xl tracking-tight font-black"
      />
      <TextGenerateEffect
        words="Remind to Grind"
        className="text-xl font-semibold"
      />
      <motion.div initial={{ scale : 0}} animate = {{scale: 1}} transition={{ ease: "easeInOut", duration: 1 }} className="flex flex-col gap-4 mt-6 ">
        <Button className="p-4 bg-customWhite text-black">Get Started</Button>
        <Dialog>
          <DialogTrigger asChild>
              <Button className="p-4 bg-darkGrey text-customWhite hover:bg-customWhite hover:text-darkGrey">
                About Remindr.
              </Button>
          </DialogTrigger>
          <DialogContent>
            
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
}
