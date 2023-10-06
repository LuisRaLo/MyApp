import {View, Text, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import {Image, VStack} from '@gluestack-ui/themed';

type Props = {
  navigation: any;
};

export default function BackArrowComponent({navigation}: Props) {
  return (
    <Fragment>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <VStack position="absolute" top={0} left={0} mt={'$5'} ml={'$5'}>
          <Image
            source={require('../../../../shared/infrastructure/framework/assets/images/arrow-back-8-16.png')}
            alt="profile"
            w={'$12'}
            h={'$12'}
          />
        </VStack>
      </TouchableOpacity>
    </Fragment>
  );
}
