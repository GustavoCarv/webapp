import { ContainerLinks, Title, Link } from './institucionalItens-style'

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
      <Title>{title}</Title>
      <ContainerLinks>{listOfLinks}</ContainerLinks>
    </nav>
  )
}

export default InstitucionalItens
