import React from 'react'
import { Skeleton } from 'primereact/skeleton'
import AnimatedNumber from 'react-animated-numbers'
import { useCounts } from '@/api/metadata'

function DocumentCount({ document }: { document: number, future: number }) {
  return (
    <div className="flex">
      <span>共</span>
      <AnimatedNumber
        className="text-[var(--blue-500)] my-1 px-1 pr-2 bg-[var(--blue-100)] rounded-[var(--border-radius)] "
        transitions={index => ({
          ease: 'easeInOut',
          duration: index + 0.3,
        })}
        animateToNumber={document}
        includeComma
      />
      <span>个文档</span>
    </div>
  )
}

function FutureCount({ future }: { document: number, future: number }) {
  return (
    <div className="flex">
      <span>与</span>
      <AnimatedNumber
        className="text-[var(--green-500)] px-1 bg-[var(--green-100)] rounded-[var(--border-radius)]"
        transitions={index => ({
          ease: 'easeInOut',
          duration: index + 0.3,
        })}
        animateToNumber={future}
        includeComma
      />
      <span>个期货数据。</span>
    </div>
  )
}

function CountSkeleton() {
  return (
    <div>
      <Skeleton width="20rem" height="2rem" className="mb-2" />
      <Skeleton width="20rem" height="2rem" />
    </div>
  )
}

export default function Statistics() {
  const { data, isLoading } = useCounts()
  return (
    <div className="flex flex-col text-5xl font-bold text-[var(--text-color)] leading-relaxed">
      <div>目前，</div>
      <div>管理系统已经收集</div>
      {
        isLoading
          ? <CountSkeleton />
          : (
              <div>
                <DocumentCount {...data} />
                <FutureCount {...data} />
              </div>
            )
      }
    </div>
  )
}
