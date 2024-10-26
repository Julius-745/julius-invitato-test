import { Box, Stack, Heading, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import font from "../font/Butler_Light-0737d51bdc90202fe832aaed043a2798.otf";
import { IMAGE_CAROUSEL } from "../constant/ImageCarousel";

interface IBanner {
    isOpen: boolean,
    handlePlay: () => void;
}

export const Banner: React.FC<IBanner> = ({isOpen, handlePlay}) => {
    const [isChange, setIsChange] = useState<boolean>(false)
    const [activeImage, setActiveImage] = useState<number>(0)

    useEffect(() => {
        if (isOpen) {
            const interval = setInterval(() => {
                setIsChange(true);
                setTimeout(() => {
                    setActiveImage((prevActiveImage) => 
                        (prevActiveImage + 1) % IMAGE_CAROUSEL.length
                    );
                    setIsChange(false);
                }, 500);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [isOpen === true]);



    return (
        <Stack 
        position="relative"
        height="100vh"
        alignSelf="center"
        justifyContent="center"
        >
        <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            backgroundImage={`url(${IMAGE_CAROUSEL[activeImage].src})`}
            backgroundSize="cover"
            filter={isChange ? "blur(10px)" : "none"}
            transition="filter 0.5s ease-in-out"
            zIndex={-1}
        />
            <Box 
                backgroundColor="rgba(0, 0, 0, 0.5)" 
                height="100%" 
                width="100%" 
                position="absolute" 
                top={0} 
                left={0}
            />
            <Stack
                gap={"25vh"}
                p={"42px"} 
                mt={20}
                w={"100%"}
                position="relative" 
                zIndex={1}
                color={"white"}
                textAlign={"center"}
                alignItems={"center"}
                mb={""}
            >
                <Heading fontSize={"xl"}>Wedding Announcement</Heading>
                <Box>
                    <Heading size={"2xl"} fontFamily={font} fontWeight={"light"}>
                        Tiffany & Jared
                    </Heading>
                    <Heading size={"xl"} fontFamily={"inheirit"} fontWeight={"light"} fontStyle={"italic"}>
                        #TImetoshaRE
                    </Heading>
                </Box>
                {isOpen ?
                <Box w={"100%"} textAlign={"right"}>
                    <Text fontWeight={"bold"} fontFamily={"Poppins,serif"} mt={20}>SCROLL TO BEGIN <ChevronDownIcon boxSize={10}/> </Text>
                </Box>
                  :
                  <Button size={"md"} variant={"solid"} color={"black"} bgColor={"white"} w={"40%"} onClick={() => handlePlay()}>Open Invitation</Button>
                }
            </Stack>
        </Stack>
    );
}
