import React from 'react'
import Actions from './actions'
import Statistics from './statistics'

export default function Landspace() {
  return (
    <div
      className="flex-1 justify-between m-1 md:m-4 flex flex-col gap-4 bg-[var(--surface-50)] p-2 md:p-4"
    >
      <Statistics />
      <Actions />
    </div>
  )
}
