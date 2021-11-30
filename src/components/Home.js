import styled from "styled-components";
import { SectionOne, Section } from "./Section";

function Home() {
  return (
    <Container>
      <SectionOne
        id="Model S"
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="modelS-mobile.avif"
        // backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Model Y"
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="modelY-mobile.avif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Model 3"
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model3-mobile.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Model X"
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="modelX-mobile.avif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Solar Panels"
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solarPanels-mobile.avif"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        id="Solar Roof"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="SolarRoof.jpeg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        id="Accessories"
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;
