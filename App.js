import React from 'react';
import { NativeBaseProvider, Text, Center } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function App() {
  return (
    <NativeBaseProvider>
      <Grid>
          <Row style={{backgroundColor: 'blue', height: 40}}>
            <Col>
              <Center>
                <Text style={{color: '#ffffff'}}>Left</Text>
              </Center>
            </Col>
            <Col>
              <Center>
                <Text style={{color: '#ffffff'}}>My Header</Text>
              </Center>
            </Col>
            <Col>
              <Center>
                <Text style={{color: '#ffffff'}}>Right</Text>
              </Center>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text>First Column</Text>
            </Col>
            <Col>
              <Text>Second Column</Text>
            </Col>
          </Row>
      </Grid>
    </NativeBaseProvider>
  );
}