import React from 'react'
import AnnouncementBar from './components/announcementBar'
import CentralHeaderSection from './components/CentralHeaderSection'
import MenuListSection from './components/menuListSection'

import { Container } from './header-styles'

const Header = () => {
  return (
    <Container>
      <AnnouncementBar />
      <CentralHeaderSection />
      <MenuListSection />
    </Container>
  )
}

export default Header
