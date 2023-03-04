import React from 'react'
import AnnouncementBar from './components/announcementBar'
import CentralHeaderSection from './components/CentralHeaderSection'
import MenuListSection from './components/menuListSection'

// import { Container } from './styles';

const Header = () => {
  return <header>
    <AnnouncementBar />
    <CentralHeaderSection />
    <MenuListSection />
  </header>
}

export default Header
