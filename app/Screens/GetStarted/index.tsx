import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {getStarted} from '../../Utils/images';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dots} from '../../Utils/data';
import {COLORS} from '../../Utils/theme';

const GetStarted = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.MainContainer}>
        <Text style={{color: COLORS.grayLight}}> X</Text>
        <Image source={getStarted} style={styles.getStartedImg} />
        <View style={styles.headingView}>
          <Text style={styles.heading}>
            3KLE invests your money intelligently in stocks
          </Text>
        </View>
        <View
          style={[
            styles.headingView,
            {
              width: wp(60),
            },
          ]}>
          <Text style={styles.subHeading}>
            Build, perserve and manage your family wealth with stocks investment
          </Text>
        </View>
        <View style={[styles.dotMain]}>
          {Dots?.map((item, index) => (
            <Text
              key={index}
              style={[
                {
                  fontSize: hp(7),
                  color: item.active ? COLORS.primary : COLORS.gray,
                },
                {
                  transform: [{translateY: -hp(5)}],
                },
              ]}>
              {item?.title}
            </Text>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('FamilyDashboard')}
          style={[
            styles.button,
            {
              transform: [{translateY: -hp(5)}],
            },
          ]}>
          <Text style={styles.buttonTitle}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
