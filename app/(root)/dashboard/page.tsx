"use client";

import { PodcastCard } from "@/components/PodcastCard";
import { podcastData } from "@/constant";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Dashboard = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1"> Trending Podcast </h1>

        <div className="podcast_grid">
          {podcastData.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              imgURL={podcast.imgURL}
              title={podcast.title}
              description={podcast.description}
              podcastId={podcast.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
