import { ClientTweetCard } from "./clientTweetCard";

type Testimonial = {
  id: string;
};

const testimonials: Testimonial[] = [
  { id: "1902064575132135607" },
  { id: "1902019001448087555" },
  { id: "1901733381533999304" },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6 border-t">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Social
        </span>
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What people are saying
            </h2>
          </div>
          <div className="mt-6 sm:mt-0 font-tektur">
            <p>
              Discover what our users have to say about their experiences. Their feedback helps us improve and grow.
            </p>
          </div>
        </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ id }, index) => (
                  <ClientTweetCard id={id} key={index}/>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
