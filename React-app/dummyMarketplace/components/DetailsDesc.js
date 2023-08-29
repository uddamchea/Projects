import React, { useState } from "react";
import { View, Text } from "react-native";

import { ItemPrice, ItemTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

import ImageCarousel from "./ImageCarousel";
import { assets } from '../constants';
import ImageScreen from "./ImageScreen";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to handle image press
  const handleImagePress = (imageUri) => {
    setSelectedImage(imageUri);
    setIsModalVisible(true);
  };

  // Function to close the modal or screen
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  const isTextTruncated = data.description.length > 100;

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ItemTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <ItemPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {isTextTruncated && !readMore && "..."}
            {isTextTruncated && (
              <Text
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}
                onPress={() => {
                  if (!readMore) {
                    setText(data.description);
                    setReadMore(true);
                  } else {
                    setText(data.description.slice(0, 100));
                    setReadMore(false);
                  }
                }}
              >
                {readMore ? " Show Less" : " Show More"}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5, bottom: 25}}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          More Photos:
        </Text>
        <ImageCarousel
        images={[
          assets.item01,
          assets.item02,
          assets.item03,
          assets.item04,
          assets.item05,
          assets.item06,
          assets.item07,
        ]}
        onImagePress={handleImagePress}
      />
        </View>
        {/* <ImageScreen imageUri={selectedImage} onClose={handleCloseModal} /> */}
    </>
  );
};

export default DetailsDesc;