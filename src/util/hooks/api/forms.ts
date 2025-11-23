import { useState, useEffect } from "react"

import { getReviews } from "../../api"
import { Review } from "../../interfaces"

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    getReviews().then(setReviews)
  }, [])

  return reviews
}