"use client"

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
})

 const PodcastDetails = ( {params} : { params : { podcastId: string}} ) =>{
  return (
    <section>
    <h1 className="text-20 font-bold text-white-1">
     Create Postcast 
    </h1>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <FormField
              control={form.control}
              name="podcastTitle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">Title</FormLabel>
                  <FormControl>
                    <Input className="input-class focus-visible:ring-offset-orange-1" placeholder="JSM Pro Podcast" {...field} />
                  </FormControl>
                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />

    </section>
  )
}

export default PodcastDetails