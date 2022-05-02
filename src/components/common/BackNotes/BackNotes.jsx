import React from 'react'
import { BackNotesContainer } from './StyleBackNotes'

export const BackNotes = props => {
  const { backNote, color, onInputCoin } = props
  return (
    <BackNotesContainer 
      onClick={() => onInputCoin(backNote)}
      backNote={backNote} 
      color={color}
    >
      <div>{backNote}</div>
    </BackNotesContainer>
  )
}