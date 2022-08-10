import { useEffect, useState, useRef } from "react";
import { IShoes } from "../../types/shoes";
import { StyledCarousel, Item, Image, Info, Span, Buttons } from "./styles";
import Button from "../../components/Button";

const Carousel = () => {
  const [data, setData] = useState<IShoes[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const carousel = useRef<HTMLHeadingElement>(null);

  if (!data || !data.length) return null;

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current?.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current?.offsetWidth;
    }
  };

  return (
    <>
      <StyledCarousel ref={carousel}>
        {data.map((item) => {
          return (
            <Item key={item.id}>
              <Image>
                <img src={item.image} alt={item.name} />
              </Image>
              <Info>
                <Span options="name">{item.name}</Span>
                <Span options="oldprice">{item.oldPrice}</Span>
                <Span options="price">U$ {item.price}</Span>
              </Info>
            </Item>
          );
        })}
      </StyledCarousel>
      <Buttons>
        <Button
          onClick={handleLeftClick}
          position="left"
          altImage="Scroll left"
        />
        <Button
          onClick={handleRightClick}
          position="right"
          altImage="Scroll right"
        />
      </Buttons>
    </>
  );
};

export default Carousel;
