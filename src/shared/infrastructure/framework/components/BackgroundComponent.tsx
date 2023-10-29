import React, {Fragment, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  VStack,
} from '@gluestack-ui/themed';
import {FlexAlignType, Platform} from 'react-native';

type BackgroundComponentProps = {
  children: ReactNode;
  paddingX?: number;
  paddingY?: number;
  marginX?: number;
  marginY?: number;
  statusBar?: boolean;
  scrollable?: boolean;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?: FlexAlignType | undefined;
  contentContainerStyle?: any;
};

export default function BackgroundComponent({
  children,
  paddingX,
  paddingY,
  marginX,
  marginY,
  statusBar,
  scrollable,
  justifyContent,
  alignItems,
}: BackgroundComponentProps) {
  const ScrollComponent = scrollable ? ScrollView : Fragment;

  return (
    <Fragment>
      <StatusBar hidden={statusBar} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        flex={1}
        zIndex={-999}>
        <ScrollComponent>
          <VStack
            flex={1}
            justifyContent={justifyContent}
            alignItems={alignItems}
            paddingHorizontal={paddingX}
            paddingVertical={paddingY}
            marginHorizontal={marginX}
            marginVertical={marginY}
            backgroundColor="white">
            {children}
          </VStack>
        </ScrollComponent>
      </KeyboardAvoidingView>
    </Fragment>
  );
}
