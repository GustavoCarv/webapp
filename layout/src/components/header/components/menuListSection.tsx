import iconDress from "../../../assets/icon-dress.png"

import MenuItem from '../../UI/menuItem'
import { Container } from './menuListSection-styles'

const MenuListSection = () => {
  return (
    <Container>
      <ul>
        <MenuItem text="Novidades" classes='is-active' imageSrc={iconDress}/>
        <MenuItem text="Vestidos" />
        <MenuItem text="Roupas" />
        <MenuItem text="Sapatos" />
        <MenuItem text="Lingerie" />
        <MenuItem text="Acessórios" />
        <MenuItem text="OUTLET" />
      </ul>
    </Container>
  )
}

export default MenuListSection
