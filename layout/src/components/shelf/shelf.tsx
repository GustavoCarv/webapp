import React from 'react'
import ProductCard from './components/productCard'
import { isBrowser } from 'react-device-detect'

import productImage from '../../assets/Produto01.png'
import productImage_2 from '../../assets/Produto02.png'

import { Container, Title, ContainerProducts } from './shelf-styles'
import Slider from 'react-slick'

const Shelf: React.FC = () => {
  return (
    <Container>
      <Title>As Mais Pedidas</Title>
      {isBrowser ? (
        <Slider slidesToScroll={2} slidesToShow={5} infinite={true}>
          <ProductCard
            imageSrc={productImage}
            name="Faux Suede Mini Skirt"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            price="R$ 500,00"
            colors={['#DEAC71', '#D37164', '#6497D3', '#3C3B79']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
          <ProductCard
            imageSrc={productImage_2}
            name="Ruched Rose Print Mini Skirt"
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            price="R$ 320,00"
            colors={['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
          <ProductCard
            imageSrc={productImage}
            name="Faux Suede Mini Skirt"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            price="R$ 500,00"
            colors={['#DEAC71', '#D37164', '#6497D3', '#3C3B79']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />{' '}
          <ProductCard
            imageSrc={productImage_2}
            name="Ruched Rose Print Mini Skirt"
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            price="R$ 320,00"
            colors={['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
          <ProductCard
            imageSrc={productImage}
            name="Faux Suede Mini Skirt"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            price="R$ 500,00"
            colors={['#DEAC71', '#D37164', '#6497D3', '#3C3B79']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
          <ProductCard
            imageSrc={productImage_2}
            name="Ruched Rose Print Mini Skirt"
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            price="R$ 320,00"
            colors={['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
        </Slider>
      ) : (
        <Slider slidesToShow={1.05} infinite={false}>
          {' '}
          <ProductCard
            imageSrc={productImage}
            name="Faux Suede Mini Skirt"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            price="R$ 500,00"
            colors={['#DEAC71', '#D37164', '#6497D3', '#3C3B79']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
          <ProductCard
            imageSrc={productImage_2}
            name="Ruched Rose Print Mini Skirt"
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            price="R$ 320,00"
            colors={['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
          <ProductCard
            imageSrc={productImage}
            name="Faux Suede Mini Skirt"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            price="R$ 500,00"
            colors={['#DEAC71', '#D37164', '#6497D3', '#3C3B79']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />{' '}
          <ProductCard
            imageSrc={productImage_2}
            name="Ruched Rose Print Mini Skirt"
            description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
            price="R$ 320,00"
            colors={['#1C1A19', '#D84E4B', '#CFC9B0', '#EAE9E5']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />
          <ProductCard
            imageSrc={productImage}
            name="Faux Suede Mini Skirt"
            description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            price="R$ 500,00"
            colors={['#DEAC71', '#D37164', '#6497D3', '#3C3B79']}
            buttonCTA="Adicionar"
            onClickFn={() => {
              return
            }}
          />{' '}
        </Slider>
      )}
    </Container>
  )
}

export default Shelf
