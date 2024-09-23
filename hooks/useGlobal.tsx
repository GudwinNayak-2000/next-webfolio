import { GlobalStateContext } from '@/providers/globalStateProvider'
import React, { useContext } from 'react'

function useGlobal() {
  return useContext(GlobalStateContext)
}

export default useGlobal