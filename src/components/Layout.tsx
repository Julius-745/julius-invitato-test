import { Box, Grid, GridItem, Heading, Stack, Text, SlideFade } from "@chakra-ui/react";
import React from "react";
import font from "../font/Butler_Light-0737d51bdc90202fe832aaed043a2798.otf";
import { UseIsMobileScreen } from "../hooks/useMobileScreen";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  const IsMobileScreen = UseIsMobileScreen()

  return (
    <Grid templateColumns={IsMobileScreen ? "1fr" : "8fr 3fr"} minW={"100vw"} minH={"100vh"}>
      {IsMobileScreen ? null : (
      <GridItem 
        position={"sticky"}
        top={0}
        overflow={"hidden"} 
        borderRight={"5px solid #6d6d6d"}
        height={"100vh"}
      >
        <Box 
          backgroundImage={"https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539"} 
          backgroundSize={"cover"} 
          backgroundPosition={"center"} 
          backgroundRepeat={"no-repeat"} 
          position="absolute" 
          top={0} 
          left={0} 
          width="100%" 
          height="100%" 
          zIndex={0}
        />
        <Box 
          backgroundColor="rgba(0, 0, 0, 0.5)" 
          height="100%" 
          width="100%" 
          position="absolute" 
          top={0} 
          left={0} 
          zIndex={1}
        />
        
        <Stack 
          gap={10} 
          p={"42px"} 
          position="relative" 
          zIndex={2} 
          color={"white"}
        >
          <SlideFade in offsetY='20px' transition={{ enter: { duration: 0.5, ease: "easeInOut" } }}>
            <Heading fontSize={"xl"}>Wedding Announcement</Heading>
          </SlideFade>
          <Heading size={"4xl"} fontFamily={font} fontWeight={"light"} maxW={"20rem"}>
            Tiffany & Jared
          </Heading>
          <SlideFade in offsetY='20px' transition={{ enter: { duration: 0.5, ease: "easeInOut" } }}>
          <Box>
            <Text fontWeight={"light"} fontStyle={"italic"} maxW={"40rem"}>
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text>
            <Text fontWeight={"light"} fontStyle={"italic"} maxW={"40rem"}>
              - Sapardi Djoko Damono
            </Text>
          </Box>
          </SlideFade>
        </Stack>
        
      </GridItem>
      )  
    }
      <GridItem overflow={"auto"} pos={"relative"} display={"flex"} flexDir={"column"} minH={"100%"}>
        <Box>
          {props.children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;
