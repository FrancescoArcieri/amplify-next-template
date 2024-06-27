"use client";

import React from 'react';
import { Flex, Card, Image, Text, Button, Badge, StepperField } from '@aws-amplify/ui-react';



const Test = () => 
 {

    return (

      <Card variation="elevated">
      <Flex alignItems="flex-start">
        <Image src="/amplify-placeholder.svg"
          alt="Amplify" width="8rem"/>
        <Flex direction="column" gap="xs">
          <Flex>
            <Badge variation="success">New</Badge>
          </Flex>
          <Text fontSize="large" fontWeight="semibold">
            Product title
          </Text>
          <Text color="font.tertiary">
            Product description
          </Text>
          <Text
            fontSize="large"
            color="secondary">
            $199.99
          </Text>
          <Flex>
            <StepperField
              label="Quantity"
              min={0}
              max={10}
              step={1}
              defaultValue={1}
              labelHidden
            />
            <Button variation="primary">Add to cart</Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>

    );
  
  }

  export default Test;