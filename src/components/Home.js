import styled from "styled-components";
import { SectionOne, Section } from "./Section";

function Home() {
  return (
    <Container>
      <SectionOne
        id="Model S"
        title="Model S"
        alt="model s"
        description="Order Online for Touchless Delivery"
        backgroundImg="modelS.avif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Model Y"
        title="Model Y"
        alt="model y"
        description="Order Online for Touchless Delivery"
        backgroundImg="modelY.avif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Model 3"
        title="Model 3"
        alt="model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model3b.avif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Model X"
        title="Model X"
        alt="model x"
        description="Order Online for Touchless Delivery"
        backgroundImg="modelX.avif"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="Solar Panels"
        title="Solar Panels"
        alt="solar panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solarPanels.avif"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        id="Solar Roof"
        title="Solar Roof"
        alt="solar roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solarRoof2.avif"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        id="Accessories"
        title="Accessories"
        alt="accessories"
        description=""
        backgroundImg="Mobile-Accessories.webp"
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
