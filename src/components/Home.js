import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          tittle="Model 3"
          description="1.99% APR Financing"
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-LHD-v2.jpg"
          leftButtonText="Order Now"
          rightButtonText="Demo Drive"
          DownArrows="https://drive.google.com/uc?id=15i5Os5GL77AVoRR1uD9MNbF6aIWDDgkc"
        />
        <Section 
          tittle="Model Y"
          description="From $31,490"
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png"
          leftButtonText="customer order"
          rightButtonText="Demo Drive"
        />
        <Section 
          tittle="Model S"
          description="From $66,490"
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-v2.jpg"
          leftButtonText="customer order"
          rightButtonText="Demo Drive"
        />
        <Section 
          tittle="Model X"
          description="From $63,990"
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-v2.jpg"
          leftButtonText="customer order"
          rightButtonText="Demo Drive"
        />
        <Section 
          tittle="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop"
          leftButtonText="order now"
          rightButtonText="learn more"
        />
        <Section 
          tittle="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
          leftButtonText="order now"
          rightButtonText="learn more"
        />
        <Section 
          tittle="CyberTruck"
          description=""
          backgroundImage="https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg"
          leftButtonText="Order Now"
          rightButtonText="Learn More"
        />
        <Section 
          tittle="Accessories"
          description=""
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
          leftButtonText="Shop now"
        />
        <Section 
          tittle="Powerwall"
          description=""
          backgroundImage="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg"
          leftButtonText="Order Now"
          rightButtonText="Learn More"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`