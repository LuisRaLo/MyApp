import React, {Fragment, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {Platform} from 'react-native';

type BackgroundComponentProps = {
  children: React.ReactNode;
  paddingX?: number;
  paddingY?: number;
  marginX?: number;
  marginY?: number;
  statusBar?: boolean;
  scrollable?: boolean;
};

export default function BackgroundComponent({
  children,
  paddingX,
  paddingY,
  marginX,
  marginY,
  statusBar,
  scrollable,
}: BackgroundComponentProps) {
  const ScrollComponent = scrollable ? ScrollView : Fragment;

  return (
    <Fragment>
      <StatusBar hidden={statusBar} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        style={{flex: 1, zIndex: 999}}>
        <ScrollComponent>
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
        </ScrollComponent>
      </KeyboardAvoidingView>
    </Fragment>
  );
}
