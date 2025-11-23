import { useCallback, useEffect, useState } from "react";

export function useForm<T>(apiCallback: (data: T) => Promise<T> | string) {
  const [data, setData] = useState<T>({} as T)
  const [error, setError] = useState(false)
  const [response, setResponse] = useState<T>()

  useEffect(() => {
    setError(false)
    setResponse(undefined)
  }, [data])

  const submitForm = useCallback(() => {
    const r = apiCallback(data)

    if (typeof r === 'string') {
      setError(true)
    } else {
      r.then(setResponse)
    }
  }, [apiCallback, data])

  return {
    data: data,
    error: error,
    response: response,
    setData: setData,
    submitForm: submitForm
  }
}