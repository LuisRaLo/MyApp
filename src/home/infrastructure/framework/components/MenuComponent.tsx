import {HStack, Image, VStack} from '@gluestack-ui/themed';
import React, {Fragment} from 'react';
import {TouchableOpacity} from 'react-native';

type MenuComponentsProps = {
  navigation: any;
};

export default function MenuComponent({navigation}: MenuComponentsProps) {
  return (
    <Fragment>
      <HStack space="lg">
        <TouchableOpacity onPress={() => console.log('click')}>
          <VStack space="lg">
            <Image
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              }}
              alt="image"
            />
          </VStack>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('click')}>
          <VStack>
            <Image
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              }}
              alt="image"
            />
          </VStack>
        </TouchableOpacity>
      </HStack>

      <HStack space="lg" mt={'$5'}>
        <TouchableOpacity onPress={() => console.log('click')}>
          <VStack space="lg">
            <Image
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              }}
              alt="image"
            />
          </VStack>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('click')}>
          <VStack>
            <Image
              size="xl"
              source={{
                uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              }}
              alt="image"
            />
          </VStack>
        </TouchableOpacity>
      </HStack>
    </Fragment>
  );
}
