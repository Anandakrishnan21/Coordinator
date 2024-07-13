import React from 'react'
import { Card } from '../ui/card'
import Questions from './Questions'

function Examination() {
  return (
    <Card className="flex flex-col gap-2 p-4">
      <Questions />
    </Card>
  )
}

export default Examination
