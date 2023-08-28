import { View, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import { SubInfo, ItemPrice, ItemTitle } from './SubInfo'

const ItemCard = ({data}) => {
    const navigation = useNavigation();

  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
    }}>
        <View style={{
            width: '100%',
            height: 250,
        }}>
            <Image
            source={data.image}
            resizeMode='cover'
            style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: SIZES.font,
                borderTopRightRadius: SIZES.font,
            }}/>

            <CircleButton 
            imgURL={assets.heart}
            right={10}
            top={10}/>
        </View>
      <SubInfo />
      <View style={{
        width: '100%',
        padding: SIZES.font,
      }}>
        <ItemTitle 
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.large}
        subTitleSize={SIZES.small}/>
        <View style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <ItemPrice price={data.price}/>
            <RectButton 
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', {data})}/>
        </View>
      </View>
    </View>
  )
}

export default ItemCard