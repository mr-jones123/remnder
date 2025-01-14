"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
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
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex flex-col items-center justify-center gap-4 mt-6"
      >
      <Link href="/get-started">
        <Button className="p-4 bg-customWhite text-black hover:text-customWhite hover:bg-darkGrey">
          Get Started
        </Button>
      </Link>
        <Dialog>
          <DialogTrigger asChild>
              <Button className="p-4 bg-darkGrey text-customWhite hover:bg-customWhite hover:text-darkGrey">
                About Remindr.
              </Button>
          </DialogTrigger>
          <DialogContent className="w-[calc(100vw-32px)] mx-auto left-1/2 -translate-x-1/2 p-4 bg-darkGrey text-customWhite  rounded-lg border-none sm:w-[440px] md:w-[540px] lg:w-[640px]">
            <DialogTitle className="text-lg font-bold ">
              Your remindr. to grind
            </DialogTitle>
            <p className="mt-2 text-sm ">
              Being consistent to your goals while being busy is challenging.
              This app lets you set your preferred time on when you want to
              achieve those goals and will remind you to do so through calling.
              That way, you will never ever forget to make tiny progress. <br />{" "}
              <br />
              Want to grind LeetCode problems? Keep up your contribution streaks
              on GitHub? Get shredded af in the gym? Remindr. got you!
            </p>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
}
