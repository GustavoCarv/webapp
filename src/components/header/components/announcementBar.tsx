import { Container, Content } from './announcementBar-styles';

type AnnouncementProps = {
  content?: string | null
}

const AnnouncementBar = ({
  content = 'Acompanhe as melhores promoções disponíveis aqui na Maeztra.',
}: AnnouncementProps) => {
  return (
    <Container >
      <Content className="container__content"> {content} </Content>
    </Container>
  )
}

export default AnnouncementBar
