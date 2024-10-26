import { Box, Stack, Heading, Text, Divider, Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import font from "../font/Butler_Light-0737d51bdc90202fe832aaed043a2798.otf";
import { useState } from "react";
import { IMAGE_CAROUSEL } from "../constant/ImageCarousel"; 
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface IOpening {
  isOpen: boolean;
}

export const Opening : React.FC<IOpening> = ({isOpen}) => {
    const [activeCarousel, setIsActiveCarousel] = useState<number>(1);

    console.log("open", isOpen)

    const handlePrev = () => {
        setIsActiveCarousel((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : IMAGE_CAROUSEL.length - 1
        );
      };
    
      const handleNext = () => {
        setIsActiveCarousel((prevIndex) =>
          prevIndex < IMAGE_CAROUSEL.length - 1 ? prevIndex + 1 : 0
        );
      };

    return (
      isOpen ? 
        <Stack
          alignSelf={"center"}
          position={"relative"}
          height={"100vh"}
          overflowX={"hidden"}
        >
          <Stack
            gap={"10vh"}
            px={"10vh"}
            mt={"20vh"}
            position="relative"
            zIndex={1}
            color={"white"}
            textAlign={"center"}
            alignItems={"center"}
            textColor={"black"}
          >
            <Box>
              <Text fontFamily={"Poppins"} fontWeight={"bold"}>DEAR MR-MRS-MS,</Text>
              <Text fontFamily={"Poppins"} fontWeight={"bold"}>Family & Friends</Text>
            </Box>
            <Stack gap={10}>
              <Heading size={"xl"} fontFamily={font} fontWeight={"medium"} whiteSpace={"pre-line"}>
                {"Welcome to \n Tiffany & Jared's \n Wedding Website"}
              </Heading>
              <Text>Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.</Text>
            </Stack>
          </Stack>
          <Stack>
              <Flex
                align="center"
                justify="center"
                position="relative"
                my={{ base: "30vh", lg: "18rem" }}
              >
                <IconButton
                  icon={<ChevronLeftIcon color={"black"}/>}
                  aria-label="Previous"
                  onClick={handlePrev}
                  position="absolute"
                  left="10px"
                  zIndex={2} />
                <IconButton
                  icon={<ChevronRightIcon color={"black"} />}
                  aria-label="Next"
                  onClick={handleNext}
                  position="absolute"
                  right="10px"
                  zIndex={2} />
                {IMAGE_CAROUSEL.map((item, idx) => {
                  const offset = idx - activeCarousel;
                  const opacity = Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.5;
                  const transform = `translateX(${offset * 100}%)`;
                  return (
                    <Box
                      key={idx}
                      position="absolute"
                      left="50%"
                      transform={`translateX(-50%) ${transform}`}
                      opacity={opacity}
                      transition="transform 0.5s, opacity 0.5s"
                      zIndex={idx === activeCarousel ? 1 : 0}
                      minW={idx === activeCarousel ? "60%" : "5%"}
                    >
                      <Image src={item.src} alt={item.alt} borderRadius={10} />
                    </Box>
                  );
                })}
              </Flex>
              <HStack align="center" justify="center">
                <Divider
                  borderColor={activeCarousel === 0 ? "#6779F3" : "gray.300"}
                  my={2}
                  w={"5%"}
                  borderWidth={"1.5px"}
                  onClick={() => setIsActiveCarousel(0)} />
                <Divider
                  borderColor={activeCarousel === 1 ? "#6779F3" : "gray.300"}
                  w={"5%"}
                  borderWidth={"1.5px"}
                  onClick={() => setIsActiveCarousel(1)} />
                <Divider
                  borderColor={activeCarousel === 2 ? "#6779F3" : "gray.300"}
                  w={"5%"}
                  borderWidth={"1.5px"}
                  onClick={() => setIsActiveCarousel(2)} />
              </HStack>
            </Stack>
        </Stack>
        : null 
    );
}
