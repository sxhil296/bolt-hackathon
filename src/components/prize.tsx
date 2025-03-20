"use client";
import React from "react";

import { AnimatePresence, hover, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Trophy } from "lucide-react";
import { MagicCard } from "./magicui/magic-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "./magicui/border-beam";

const prizes = [
    {
      title: "First Place",
      prize: "$1,000,000",
      description: "The grand winner takes home a massive $1,000,000 prize!"
    },
    {
      title: "Second Place",
      prize: "$50,000",
      description: "Runner-up receives a solid $20,000 reward."
    },
    {
      title: "Third Place",
      prize: "$20,000",
      description: "Third-place finisher earns a respectable $20,000."
    }
  ];
export function Prize() {
  return (
    <>
      {/* <section>
        <div className="py-16 md:py-32">
          <div className="mx-auto max-w-6xl px-6 border-t">
            <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
              Prize
            </span>
            <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
              <div className="sm:w-1/2 h-fit">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  What will winners get?
                </h2>
              </div>
              <div className="mt-6 sm:mt-0 font-tektur">
                <p>Winners will get prize up to $1M+.</p>
                <p>
                  The first team will receive $1M, the second team will get
                  $50,000, and the third team will get $20,000.
                </p>
                <p>
                  Additionally, there will be special prizes for outstanding
                  performances in various categories.
                </p>
              </div>
            </div>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center  w-full gap-4 mx-auto">
              <Card className="w-[250px] h-[300px] flex justify-center items-center">
                <MagicCard gradientColor={"#D9D9D955"} className="h-full w-full justify-center items-center flex text-center">
                  <CardHeader>
                    <CardTitle>Second Position</CardTitle>
                  </CardHeader>
                  <CardContent>$50,000 Prize</CardContent>
                </MagicCard>
              </Card>
              <Card className="w-[250px] h-[300px] flex justify-center items-center">
                <MagicCard gradientColor={"#D9D9D955"} className="h-full w-full justify-center items-center flex text-center">
                  <CardHeader>
                    <CardTitle>Second Position</CardTitle>
                  </CardHeader>
                  <CardContent>$50,000 Prize</CardContent>
                </MagicCard>
              </Card>
              <Card className="w-[250px] h-[300px] flex justify-center items-center">
                <MagicCard gradientColor={"#D9D9D955"} className="h-full w-full justify-center items-center flex text-center">
                  <CardHeader>
                    <CardTitle>Second Position</CardTitle>
                  </CardHeader>
                  <CardContent>$50,000 Prize</CardContent>
                </MagicCard>
              </Card>

            </div>
          </div>
        </div>
      </section> */}
        <section>
            <div className="py-16 md:py-32">
              <div className="mx-auto max-w-6xl px-6 border-t">
              <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
                Prize
              </span>
              <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                <div className="sm:w-2/5">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                  What will winners get?
                  </h2>
                </div>
                <div className="mt-6 sm:mt-0 font-tektur">
                  <p>
                  The first team will receive $1M, the second team will get
                  $50,000, and the third team will get $20,000. Additionally, there will be special prizes for outstanding
                  performances in various categories.
                  </p>
                </div>
              </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                {prizes.map(({ title, prize, description }, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <div>
                        <h3 className="font-medium text-sm">{title}</h3>
                        <span className="block text-2xl tracking-wide text-yellow-500">{prize}</span>
                        <blockquote className="mt-3">
                          <p className="text-gray-300 font-tektur">{description}</p>
                        </blockquote>
                      </div>
                    </CardContent>
                    <BorderBeam duration={8} size={100} />
                  </Card>
                ))}
                </div>
              </div>
            </div>
          </section>
    </>
  );
}

// const Card = ({
//   title,
//   icon,
//   children,
//   description,
// }: {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={() => setHovered((prev) => !prev)} // Toggle on click for mobile
//       onTouchStart={() => setHovered(true)}
//       className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] rounded-3xl max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] "
//     >
//       <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20">
//         <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
//           {icon}
//         </div>
//         <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
//           {title}
//         </h2>
//         <h2
//           className="dark:text-white text-2xl font-tektur opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
//           style={{ color: "#e4ecff" }}
//         >
//           {description}
//         </h2>
//       </div>
//     </div>
//   );
// };

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-bold text-xl text-white backdrop-blur-3xl font-tektur">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
