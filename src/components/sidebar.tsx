import React from 'react'
import { Sidebar } from 'primereact/sidebar'
import type { MenuItem } from 'primereact/menuitem'
import { Button } from 'primereact/button'
import { Link } from 'react-router-dom'

export default function MenuSideBar({ model, onClick }: { model: MenuItem[], onClick: () => void }) {
  return (
    <div className="flex flex-col gap-1 my-2">
      {
        model.map(item => (
          <Link
            to={item.url}
            key={item.label}
            onClick={onClick}
          >
            <Button
              label={item.label}
              // icon={item.icon}
              className="p-button-text"
              severity="secondary"
              text
              size="small"
              // onClick={() => {
              //   if (item.url) {
              //     window.location.href = item.url
              //   }
              // }}
              pt={{
                label: {
                  className: 'text-left text-[var(--text-color)]',
                },
              }}
            />
          </Link>
        ))
      }
    </div>
  )
}
