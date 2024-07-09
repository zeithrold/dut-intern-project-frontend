import { FileUpload } from 'primereact/fileupload'
import { Toast } from 'primereact/toast'
import React from 'react'

export default function UploadPage() {
  const toast = React.useRef<Toast>(null)
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4 text-[var(--text-color)]">
        <h2 className="text-4xl font-bold">上传你的文件。</h2>
        <p className="font-bold">上传文件以进行数据统计</p>
      </div>
      <div>
        <Toast ref={toast}></Toast>
        <FileUpload
          url={`${import.meta.env.VITE_API_ENDPOINT}/document`}
          name="file"
          mode="basic"
          chooseLabel="上传文件"
          auto
          onUpload={(e) => {
            toast.current?.show({
              severity: 'info',
              summary: '成功上传文件',
              detail: '您已成功上传文件。',
            })
          }}
        />
      </div>
    </div>
  )
}
