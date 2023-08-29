import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import moment from 'moment'

export const ItemTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: titleSize,
            color: COLORS.primary,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: subTitleSize,
            color: COLORS.primary,
          }}
        >
          {subTitle}
        </Text>
      </View>
    );
  }

export const ItemPrice = ({price}) => {
    return (
      <View style={{
        flexDirection:'row',
        alignItems:'center',
      }}>
        <Image 
        source={assets.dollar}
        resizeMode='contain'
        style={{
            width: 15,
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
        // flexDirection: 'row',
      }}>
        {[assets.person01].map((imgUrl, index) => (
            <ItemCMP imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        ))}
      </View>
    )
  }



export const ItemDate = ({date="2023-08-25T18:00:51.000Z"}) => {
  const dateMoment = moment.utc(date).local().startOf('seconds');
  const timeAgo = dateMoment.fromNow();

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
        borderRadius: SIZES.base,
      }}>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary,
        }}>{timeAgo}</Text>
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