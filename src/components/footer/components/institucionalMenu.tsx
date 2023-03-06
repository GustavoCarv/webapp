import { Container } from './institucionalMenu-styles';

import InstitucionalItens from './institucionalItens'

const InstitucionalMenu = () => {
  return (
    <Container>
      <InstitucionalItens
        title="Informações"
        links={[
          { name: 'Quem Somos', url: '#' },
          { name: 'Prazo de Envio', url: '#' },
          { name: 'Trocas e Devoluções', url: '#' },
          { name: 'Promoções e Cupons', url: '#' },
        ]}
      />
      <InstitucionalItens
        title="Minha Conta"
        links={[
          { name: 'Minha Conta', url: '#' },
          { name: 'Meus Pedidos', url: '#' },
          { name: 'Cadastre-se', url: '#' },
        ]}
      />
      <InstitucionalItens
        title="Onde nos Encontrar"
        links={[
          { name: 'Lojas', url: '#' },
          { name: 'Endereço', url: '#' }
        ]}
      />
    </Container>
  )
}

export default InstitucionalMenu
