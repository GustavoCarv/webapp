import { BrowserView, MobileView } from 'react-device-detect'
import {
  ContainerLinks,
  Title,
  Link,
  Summary,
} from './institucionalItens-style'

import plusSignal from '../../../assets/plusSignal.png'

type link = {
  name: string
  url: string
}

type InstitucionalItensProps = {
  links: link[]
  title: string
}

const InstitucionalItens = ({ links, title }: InstitucionalItensProps) => {
  const listOfLinks = links.map((link) => {
    return (
      <li key={link.name}>
        <Link href={link.url}>{link.name}</Link>
      </li>
    )
  })

  return (
    <nav>
      <BrowserView>
        <Title>{title}</Title>
        <ContainerLinks>{listOfLinks}</ContainerLinks>
      </BrowserView>
      <MobileView>
        <details>
          <Summary>
            <Title>{title}</Title>
            <span>+</span>
          </Summary>
          <ContainerLinks>{listOfLinks}</ContainerLinks>
        </details>
      </MobileView>
    </nav>
  )
}

export default InstitucionalItens
