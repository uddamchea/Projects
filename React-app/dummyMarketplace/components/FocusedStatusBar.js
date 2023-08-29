import React from "react";
import { View, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar animated={true} {...props} />
  ) : (
    <View style={{ height: StatusBar.currentHeight }}>
      <StatusBar {...props} hidden />
    </View>
  );
};

export default FocusedStatusBar;
