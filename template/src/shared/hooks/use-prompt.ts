import {createRef} from 'react'
import {PromptHandle} from 'components/prompt'

const ref = createRef<PromptHandle>()

export function usePrompt() {
  return {
    ref,
    show(t: string) {
      ref.current?.show(t)
    },
  }
}
