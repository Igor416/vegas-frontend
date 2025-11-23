import { useMemo } from "react";
import { useImage as useImg } from "react-image";

import { useUrlRoot } from "./useUrlRoot";

export function useImage(srcList: string | string[]) {
  const root = useUrlRoot()

  const modifiedSrcList = useMemo(() => {
    const addPrefix = (src: string) => (src.startsWith('http') ? '' : root) + src
    if (Array.isArray(srcList)) {
      return srcList.map(addPrefix)
    }
    return addPrefix(srcList)
  }, [root, srcList])
  
  const { src, isLoading } = useImg({
    srcList: modifiedSrcList,
    imgPromise: async () => {}
  })

  return { src, isLoading }
}