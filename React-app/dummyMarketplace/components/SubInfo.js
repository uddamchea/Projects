import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const ItemTitle = (title, subTitle, titleSize, subTitleSize) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary,
      }}>Title</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary,
      }}>Subtitle</Text>
    </View>
  )
}

export const ItemPrice = ({price}) => {
    return (
      <View style={{
        flexDirection:'row',
        alignItems:'center',
      }}>
        <Image 
        source={assets.eth}
        resizeMode='contain'
        style={{
            width: 20,
            height: 20,
            marginRight: 2
        }}/>
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary,
        }}>
            {price}
        </Text>
      </View>
    )
  }

export const ItemCMP = ({imgUrl, index}) => {
    return (
      <Image source={imgUrl}
      resizeMode='contain'
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font
      }}/>
    )
  }

export const People = () => {
    return (
      <View style={{
        flexDirection: 'row',
      }}>
        {[assets.person01].map((imgUrl, index) => (
            <ItemCMP imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        ))}
      </View>
    )
  }

export const ItemDate = () => {
    return (
      <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}>
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary,
        }}>Posted in</Text>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary,
        }}>12h Ago</Text>
      </View>
    )
  }

export const SubInfo = () => {
    return (
      <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <People />
        <ItemDate />
      </View>
    )
  }