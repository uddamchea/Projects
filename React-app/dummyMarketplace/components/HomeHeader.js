import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image
          source={assets.logo}
          resizeMode='contain'
          style={{
            width: 90,
            height: 90,
          }}/>
          <View style={{
            width: 45,
            height: 45,
          }}>
            <Image
            source={assets.person04}
            resizeMode='contain'
            style={{
              width: '100%',
              height: '100%',
            }}/>
          </View>
      </View>
      <View style={{
        marginVertical: SIZES.font,
      }}>
        <Text style={{
          fontFamily:FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
        }}>
          Hello, Salim 👋
        </Text>
      </View>

      <View style={{
        marginTop: SIZES.font,
      }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
        }}>
          <Image
          source={assets.search}
          resizeMode='contain'
          style={{
            width: 20,
            height: 20,
            marginRight: SIZES.base,
          }}/>
          <TextInput 
          placeholder='Search Item'
          style={{
            flex: 1,
            color: COLORS.white,
          }}
          onChangeText={onSearch}/>
        </View>
      </View>
    </View>
  )
}

export default HomeHeader