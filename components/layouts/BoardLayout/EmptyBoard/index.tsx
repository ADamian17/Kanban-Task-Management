import React from 'react'

type EmptyBoardType = {
  boardId: string
}

const EmptyBoard: React.FC<EmptyBoardType> = ({ boardId }) => {
  return (
    <div>
      <p>This board is empty. Create a new column to get started.</p>
      Add New Column to board {boardId}
    </div>
  )
}

export default EmptyBoard
