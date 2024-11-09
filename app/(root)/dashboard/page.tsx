import { PodcastCard } from "@/components/PodcastCard"
import { Button } from "@/components/ui/button"
import { podcastData } from "@/constant"


const Dashboard = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1"> Trending Podcast </h1>
        {podcastData.map((podcast) => (
          <PodcastCard />
        ))}
      </section>
      </div>
  )
}

export default Dashboard