import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { withBaseDir } from '../util/helpers';

const items = [
  {
    src: withBaseDir`/static/images/home/nss1.jpg`,
    altText: 'Slide 1',
/*    caption: 'Slide 1',
    header: 'Slide 1 Header'*/
  },
  {
    src: withBaseDir`/static/images/home/nss2.jpg`,
    altText: 'Slide 2',
/*    caption: 'Slide 2',
    header: 'Slide 2 Header'*/
  },
  {
    src: withBaseDir`/static/images/home/nss3.jpg`,
    altText: 'Slide 3',
/*    caption: 'Slide 2',
    header: 'Slide 2 Header'*/
  },
  {
    src: withBaseDir`/static/images/home/nss4.jpg`,
    altText: 'Slide 4',
/*    caption: 'Slide 2',
    header: 'Slide 2 Header'*/
  },
  {
    src: withBaseDir`/static/images/home/nss5.jpg`,
    altText: 'Slide 5',
/*    caption: 'Slide 3',
    header: 'Slide 3 Header'*/
  }
];

class ResponsiveCarousel extends React.Component {
  state = { 
    activeIndex: 0
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render = () => {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={{ width: "100%",objectFit: "contain" }} src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default ResponsiveCarousel;
