import React from 'react'
import { AutoComplete } from 'primereact/autocomplete'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { Button } from 'primereact/button'
import DataChart from './components/chart'
import { useSearch } from '@/api/search'

export default function DataPage() {
  const [query, setQuery] = React.useState('')
  const { data, isLoading } = useSearch(query)
  const [value, setValue] = React.useState('')
  const [searchTarget, setSearchTarget] = React.useState('')
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4 text-[var(--text-color)]">
        <h2 className="text-4xl font-bold">查询你想要的期货信息。</h2>
        <p className="font-bold">在下方搜索期货后，点击搜索以查询结果。</p>
      </div>
      <div className="flex gap-2 w-full justify-center">
        <AutoComplete
          value={value}
          onChange={e => setValue(e.value)}
          suggestions={data ? data.results : []}
          completeMethod={(e) => {
            setQuery(e.query)
          }}
          placeholder="搜索期货信息"
          size={40}
        />
        <Button
          label="开始搜索"
          disabled={data ? !(data.results.includes(value)) : true}
          onClick={() => setSearchTarget(value)}
        />
      </div>
      {
        searchTarget && <DataChart future={searchTarget} />
      }
    </div>
  )
}
