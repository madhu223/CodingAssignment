import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const TilesDemo = () => {
  const [responseData, setResponseData] = useState([]);

  const styles = {
    card: {
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem',
      marginBottom: '10px',
    },

    cardImage: {
      objectFit: 'cover',
      width: '90px',
      height: '90px',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api?results=50');
      const resp = await response.json();
      setResponseData(resp.results);
      console.log(resp.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {responseData.map((resp, k) => (
            <Col key={k} xs={8} md={4} lg={3}>
              <Card>
                <Card.Img
                  src={resp.picture.thumbnail}
                  style={styles.cardImage}
                />

                <Card.Text>
                  Name: {resp.name.title} {resp.name.first} {resp.name.last}
                </Card.Text>
                <Card.Text>Email: {resp.email}</Card.Text>
                <Card.Text>Gender: {resp.gender}</Card.Text>
              </Card>
            </Col>
          ))}
          <br />
          <br />
        </Row>
      </Container>
    </div>
  );
};
export default TilesDemo;
