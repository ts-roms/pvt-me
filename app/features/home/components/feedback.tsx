import { motion } from 'framer-motion'
import {Card, CardContent, CardHeader, CardTitle} from "~/layouts/ui/card";


export const Feedback = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {
        [
          {
            "name": "Jane Doe",
            "role": "Product Manager",
            "company": "Acme Co.",
            "rating": 5,
            "feedback": "Rommel consistently delivered high‑quality features on time and communicated clearly throughout the project."
          },
          {
            "name": "John Smith",
            "role": "CTO",
            "company": "Startup XYZ",
            "rating": 5,
            "feedback": "Great developer experience focus. Our frontend performance improved noticeably after his refactors."
          },
          {
            "name": "Maria Garcia",
            "role": "Founder",
            "company": "Craft Studio",
            "rating": 4,
            "feedback": "Professional and thoughtful. Loved the attention to accessibility and details in UI interactions."
          }
        ].map((rev) => <FeedbackCard key={rev.name} rev={rev} />)

      }
    </div>
  )
}

function FeedbackCard({rev}: Readonly<{
  rev: { name: string, role?: string, company?: string, rating?: number, feedback: string }
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.35, delay: 3 * 0.05 }}
    >
      <Card className="h-full bg-white dark:bg-gray-900/40">
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2 text-base md:text-lg">
                <span>
                  {rev.name}
                  {rev.role || rev.company ? (
                    <span className="block text-xs font-normal text-gray-500">
                      {[rev.role, rev.company].filter(Boolean).join(' • ')}
                    </span>
                  ) : null}
                </span>
            {typeof rev.rating === 'number' ? (
              <span aria-label={`${rev.rating} out of 5 stars`} className="text-yellow-500">
                    {'★'.repeat(Math.max(0, Math.min(5, Math.round(rev.rating))))}
                <span className="text-gray-300 dark:text-gray-600">
                      {'★'.repeat(5 - Math.max(0, Math.min(5, Math.round(rev.rating))))}
                    </span>
                  </span>
            ) : null}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">“{rev.feedback}”</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
