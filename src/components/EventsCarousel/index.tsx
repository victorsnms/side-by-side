import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";

export const EventsCarousel = () => {
  const [value, setValue] = useState(0);

  const onChange = (value: number) => {
    setValue(value);
  };
  return (
    <Box w="50vw" mt="40px">
      <Carousel value={value} onChange={onChange} itemWidth={250}>
        <img
          width="200px"
          alt="Img1"
          src="https://www.praias-360.com.br/img-600/ba/salvador/ba-salvador-praia-de-piata-020.jpg"
        />
        <img
          width="200px"
          alt="Img2"
          src="https://dicasdonossobrasil.com.br/wp-content/uploads/2018/05/Praia-do-Porto-da-Barra-Forte.jpg"
        />
      </Carousel>
      <Dots
        value={value}
        onChange={onChange}
        thumbnails={[
          <img
            width="50px"
            key={1}
            className="img-example-small"
            src="https://www.praias-360.com.br/img-600/ba/salvador/ba-salvador-praia-de-piata-020.jpg"
          />,
          <img
            width="50px"
            key={12}
            className="img-example-small"
            src="https://dicasdonossobrasil.com.br/wp-content/uploads/2018/05/Praia-do-Porto-da-Barra-Forte.jpg"
          />,
        ]}
      />
    </Box>
  );
};
