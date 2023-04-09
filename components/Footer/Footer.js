import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
export default function Footer({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row',
     justifyContent: "space-around", paddingVertical: 5,
     backgroundColor: "transparent", alignItems: "center"}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };


        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            // style={{ flex: 1}}
          >
            <View style={{padding: 5}}>
              <Image style={isFocused ? {width: 45, height: 45} : {width: 30, height: 30}} source={label}/>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}