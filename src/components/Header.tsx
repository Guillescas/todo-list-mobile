import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

import { IColorsOfTheme } from '../pages/Home';

import SunSvg from '../assets/icons/sun.svg';
import MoonSvg from '../assets/icons/moon.svg';

interface IHeaderProps {
  colorsOfTheme: IColorsOfTheme;
  isDarkThemeOn: boolean;
  setIsDarkThemeOn: (isDarkThemeOn: boolean) => void;
}

export function Header({
  colorsOfTheme,
  isDarkThemeOn,
  setIsDarkThemeOn,
}: IHeaderProps) {
  const handleChangeTheme = () => {
    setIsDarkThemeOn(!isDarkThemeOn)
  }

  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colorsOfTheme.colors.background }
      ]}
    >
      <Text style={[styles.headerText, { color: colorsOfTheme.colors.title }]}>to.</Text>
      <Text
        style={[
          styles.headerText,
          { fontFamily: 'Poppins-SemiBold', color: colorsOfTheme.colors.title }
        ]}
      >
        do
      </Text>

      <TouchableOpacity
        onPress={handleChangeTheme}
        style={{ marginLeft: 48 }}
      >
        {isDarkThemeOn ? (
          <SunSvg color={colorsOfTheme.colors.title} />
        ) : (
          <MoonSvg color={colorsOfTheme.colors.title} />
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
