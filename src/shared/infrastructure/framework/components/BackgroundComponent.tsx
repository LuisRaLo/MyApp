import React, {Fragment} from 'react';
import {Text, VStack} from '@gluestack-ui/themed';

type BackgroundComponentProps = {
  children: React.ReactNode;
  paddingX?: number;
  paddingY?: number;
  marginX?: number;
  marginY?: number;
};

export default function BackgroundComponent({
  children,
  paddingX,
  paddingY,
  marginX,
  marginY,
}: BackgroundComponentProps) {
  return (
    <Fragment>
      <VStack
        paddingHorizontal={paddingX}
        paddingVertical={paddingY}
        marginHorizontal={marginX}
        marginVertical={marginY}
        flex={1}
        backgroundColor="white">
        <Text>Background Component</Text>
        {children}
      </VStack>
    </Fragment>
  );
}
