import { memo } from 'react'
import { Layout } from 'antd'
import RoutePath from '../../routes/RoutePath'
import { Head } from '../index'
import '../../styles/Header.scss'

const { Content } = Layout

const LayoutWrapper = (props) => {
  return (
    <Layout style={{ height: '100vh' }} className="site-layout">
      <Head />
      <Content
        style={{
          margin: `94px 30px 94px 30px`,
          padding: 0,
          height: '100vh',
          // minHeight: 'calc(100vh - 210px)',
        }}
      >
        <RoutePath />
      </Content>
    </Layout>
  )
}

export default memo(LayoutWrapper)
