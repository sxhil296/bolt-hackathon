import GridItem from "./gridItem";

import {  Computer, DollarSign, Globe,   Sparkles, X } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6 border-t">
        {" "}
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Features
        </span>
        <ul className="mt-12 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Globe className="h-4 w-4 text-green-400 " />}
            title="World Record"
            description="Aiming to make the Guinness Book of World Records by bringing together 100k+ builders to build simultaneously on a single platform."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={
              <Sparkles className="h-4 w-4 text-yellow-300 " />
            }
            title="Organized by Bolt.new"
            description="The best AI code editor ever."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<DollarSign className="h-4 w-4 text-white " />}
            title="$1M+ in Prizes"
            description="It's the best money you'll ever spend."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={
              <Computer className="h-4 w-4 text-gray-300 " />
            }
            title="100% virtual event."
            description="Join and participate from anywhere in the world."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={
              <X className="h-4 w-4 text-white " />
            }
            title="From a tweet to reality."
            description="Started as a idea shared on twitter and now is being transformed into reality."
          />
        </ul>
      </div>
    </section>
  );
}
