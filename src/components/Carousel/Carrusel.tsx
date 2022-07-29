import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Carrusel.css'

interface Props {
  responsive: {
    desktop: {
      breakpoint: {
        max: number
        min: number
      }
      items: number
      partialVisibilityGutter: number
    }
    mobile: {
      breakpoint: {
        max: number
        min: number
      }
      items: number
      partialVisibilityGutter: number
    }
    tablet: {
      breakpoint: {
        max: number
        min: number
      }
      items: number
      partialVisibilityGutter: number
    }
  }
  children: React.ReactNode
  clase: string
}
export default function Carrusel({ responsive, clase, children }: Props) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={true}
      className=''
      containerClass='container-with-dots'
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass={clase}
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      swipeable>
      {children}
    </Carousel>
  )
}
