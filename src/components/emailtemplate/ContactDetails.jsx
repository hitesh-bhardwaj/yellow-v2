import React from "react";
import { Body, Column, Container, Head, Hr, Html, Img, Link, Preview, Row, Section, Text} from "@react-email/components";

const ContactDetails = ({ userName, userEmail, userNumber, userDetail, userService, userSource }) => {
  const selectedServices = Object.keys(userService).filter(service => userService[service]);

  return (
    <Html>
      <Head />
      <Preview>
        Someone just filled Contact Details on Enigma Website.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={"https://yellow-v2.vercel.app/_next/image?url=%2Flogo-black.png&w=256&q=75"}
            width="100"
            height="50"
            alt="Logo"
            style={logo}
          />
          <Text style={paragraph}>Hi,</Text>
          <Text style={paragraph}>
            You have a new contact form submission on the Yellow website.
            <br />
            Below are the details.
          </Text>
          <Section>
            <Row style={row}>
              <Column style={columnHead}>Name</Column>
              <Column style={columnText}>{userName}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Email</Column>
              <Column style={{...columnText, textDecoration: "underline", color: "#067df7"}}>{userEmail}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Number</Column>
              <Column style={columnText}>{userNumber}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Detail</Column>
              <Column style={columnText}>{userDetail}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Source</Column>
              <Column style={columnText}>{userSource}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Services</Column>
              <Column style={columnText}>
                {selectedServices.length > 0 ? selectedServices.map((service, index) => (
                  <div key={index}>{service}</div>
                )) : <div>No services selected</div>}
              </Column>
            </Row>
          </Section>
          <Text style={footer}>
            This form is submitted from <Link href="/contact-us">Contact Page.</Link>
          </Text>
          <Text style={paragraph}>
            - Team Yellow
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
          Loft offices 2, Office 107, Dubai Media City, Dubai UAE
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactDetails;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const row = {
  borderLeft: "1px solid #f2f2f2",
  borderRight: "1px solid #f2f2f2",
  borderTop: "1px solid #f2f2f2",
};

const columnHead = {
  textAlign: "left",
  fontSize: "16px",
  lineHeight: "26px",
  fontWeight: "500",
  width: "120px",
  padding: "10px 15px",
  borderRight: "1px solid #f2f2f2",
};

const columnText = {
  textAlign: "left",
  fontSize: "15px",
  lineHeight: "26px",
  padding: "10px 15px",
  color: "#6a6a6a",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};