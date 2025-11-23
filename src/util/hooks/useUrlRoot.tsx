import { useState } from "react"

export function useUrlRoot() {
  //const [root] = useState('http://127.0.0.1:8000')
  const [root] = useState('')

  return root
}