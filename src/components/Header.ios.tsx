import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

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
    <SafeAreaView
      style={[
        styles.header,
        colorsOfTheme && { backgroundColor: colorsOfTheme.colors.primary }
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headerWrapper}>
          <View style={styles.headerTextWrapper}>
            <Text style={[styles.headerText, { color: colorsOfTheme.colors.title }]}>to.</Text>
            <Text
              style={[
                styles.headerText,
                { fontFamily: 'Poppins-SemiBold', color: colorsOfTheme.colors.title }
              ]}
            >
              do
            </Text>
          </View>

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
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 44,
  },
  headerWrapper: {
    marginHorizontal: 40,
    marginVertical: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTextWrapper: {
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
