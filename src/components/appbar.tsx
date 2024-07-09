import React from 'react'
import { Toolbar } from 'primereact/toolbar'
import type { MenuItem } from 'primereact/menuitem'
import { Button } from 'primereact/button'
import { Candles, Menu } from '@styled-icons/boxicons-regular'
import { CloudUpload, Data, Home } from '@styled-icons/boxicons-solid'
import { useMediaQuery } from 'usehooks-ts'
import { Sidebar } from 'primereact/sidebar'
import { Link } from 'react-router-dom'
import MenuSideBar from './sidebar'

const items: MenuItem[] = [
  {
    label: '首页',
    icon: options => <Home size={18} {...options?.iconProps} />,
    url: '/',
  },
  {
    label: '文件上传',
    icon: options => <CloudUpload size={18} {...options?.iconProps} />,
    url: '/upload',
  },
  {
    label: '数据分析',
    icon: options => <Data size={18} {...options?.iconProps} />,
    url: '/data',
  },
]

function BarMenu({ model }: { model: MenuItem[] }) {
  return (
    <div className="hidden lg:flex gap-2">
      {
        model.map(item => (
          <Link key={item.label} to={item.url}>
            <Button
              label={item.label}
              icon={item.icon}
              className="p-button-text"
              text
              severity="secondary"
            />
          </Link>
        ))
      }
    </div>
  )
}

function AppBarTitle({ title, subtitle, icon, right }: { title: string, subtitle: string, icon?: boolean, right?: boolean }) {
  return (
    <div className="flex flex-row items-center">
      {
        icon ? <Candles size={30} className="mr-1 text-[var(--text-color)]" /> : null
      }
      <div className={`flex flex-col ${right ? 'items-end' : null}`}>
        <h1 className="text-lg font-bold text-[var(--text-color)]">
          {title}
        </h1>
        <small className="text-[var(--text-color-secondary)]">{subtitle}</small>
      </div>
    </div>
  )
}

function ToggleSideBarButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      rounded
      text
      // outlined
      severity="secondary"
      onClick={onClick}
      icon={
        options => <Menu size={24} {...options.iconProps} />
      }
    />
  )
}

export default function AppBar() {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const [visible, setVisible] = React.useState(false)
  return (
    <div>
      <Toolbar
        className="rounded-none"
        // model={items}
        start={<AppBarTitle title="期货数据管理系统" subtitle="文华财经实习项目（项目二）" icon />}
        center={<BarMenu model={items} />}
        end={
          isLargeScreen
            ? <AppBarTitle title="2024大工未院生产实习第八组" subtitle="Group 2-7" right />
            : <ToggleSideBarButton onClick={() => setVisible(true)} />
        }
      />

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        header={
          <AppBarTitle title="期货数据管理系统" subtitle="2024大工未院生产实习第八组" icon />
        }
        fullScreen
      >
        <MenuSideBar
          model={items}
          onClick={() => {
            setVisible(false)
          }}
        />
      </Sidebar>
    </div>
  )
}
