import React from 'react'
import { Button } from 'primereact/button'
import { CloudUpload, Data } from '@styled-icons/boxicons-solid'
import { Link } from 'react-router-dom'

export default function Actions() {
  return (
    <div className="flex flex-1 flex-wrap gap-4">
      <Link to="/upload">
        <Button
          rounded
          label="开始上传文件"
          size="large"
          icon={
            options => (
              <CloudUpload size={24} {...options.iconProps} />
            )
          }
        />
      </Link>
      <Link to="/data">
        <Button
          rounded
          label="进行数据统计"
          size="large"
          severity="secondary"
          icon={
            options => (
              <Data size={24} {...options.iconProps} />
            )
          }
        />
      </Link>
    </div>
  )
}
