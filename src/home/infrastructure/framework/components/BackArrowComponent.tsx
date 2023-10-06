import {TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import {VStack, Text} from '@gluestack-ui/themed';
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  navigation: any;
};

export default function BackArrowComponent({navigation}: Props) {
  return (
    <Fragment>
      <VStack position={'absolute'} top={10} left={20} zIndex={1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={40} />
        </TouchableOpacity>
      </VStack>
    </Fragment>
  );
}
