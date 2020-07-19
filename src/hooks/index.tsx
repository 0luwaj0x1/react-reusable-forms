import { useState } from 'react'

export type InputTypes = {
  label: string
  name: string
  isrequired?: boolean
  placeholder?: string
  cols?: number
  rows?: number
  style?: React.CSSProperties
  value?: string
  onChange?: () => void
};

export const useInputs = (inputProps: InputTypes[]) => {

  const [inputs, setInputs] = useState<InputTypes[]>(inputProps)

  const setInput = (i: number, input: InputTypes) => setInputs(Object.assign([...inputs], { [i]: input }));

  const resetInputs = () =>  inputs.forEach((input: InputTypes, i: number) => setInput(i, Object.assign(input, {value: ''})))

  const updatedInputs =  inputs.map(({value = "", ...rest}, i) => ({
    ...rest,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInput(i, { ...rest, value: e.target.value }),
  }));

  return [updatedInputs, resetInputs] as  [ InputTypes[], () => void]
  

}


