import {motion} from 'framer-motion'
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card";
import {useLoaderData} from "react-router";
import type {Feedback} from "~/@types/feedback";


export const Feedbacks = () => {
  const {feedbacks} = useLoaderData();
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {
        feedbacks.map((review: Feedback, idx: number) =>
          <motion.div
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.35, delay: idx * 0.05}}
            key={review.name}
          >
            <FeedbackCard review={review}/>
          </motion.div>)

      }
    </div>
  )
}

function FeedbackCard({review}: Readonly<{
  review: Feedback
}>) {
  return (

    <Card className="h-full bg-white dark:bg-gray-900/40">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 text-base md:text-lg">
                <span>
                  {review.name}
                  {review.role || review.company ? (
                    <span className="block text-xs font-normal text-gray-500">
                      {[review.role, review.company].filter(Boolean).join(' • ')}
                    </span>
                  ) : null}
                </span>
          <span aria-label={`${review.rating} out of 5 stars`} className="text-yellow-500">
                    {'★'.repeat(Math.max(0, Math.min(5, Math.round(review.rating))))}
            <span className="text-gray-300 dark:text-gray-600">
                      {'★'.repeat(5 - Math.max(0, Math.min(5, Math.round(review.rating))))}
                    </span>
                  </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">“{review.feedback}”</p>
      </CardContent>
    </Card>
  )
}
