import React from 'react'
import { View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, ContactButton, SubInfo, FocusedStatusBar } from '../components'
import DetailsDesc from '../components/DetailsDesc'

const DetailsHeader = ({data, navigation}) => (
  <View style={{
    width: '100%',
    heigh: '100%',
  }}>
    <Image 
    source={data.image}
    resizeMode='cover'
    style={{
      width: '100%',
      height: 375,
    }}/>
    <CircleButton 
      imgURL={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 20}
    />
    <CircleButton 
      imgURL={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 20}
    />
  </View>
)

const Details = ({route, navigation}) => {
  const {data} = route.params;
  
  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <FocusedStatusBar
      barStyle='dark-content'/>
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,255,0.5)',
        zIndex: 1,
      }}>
        <ContactButton marginBottom={5} minWidth={180} fontSize={SIZES.large} {...SHADOWS.dark}/>
      </View>

      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge *3
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}/>
            <SubInfo />
            <View style={{
              padding: SIZES.font,
            }}>
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
        />
    </SafeAreaView>
  )
};

export default Details;