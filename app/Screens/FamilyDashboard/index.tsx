import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {dasboard, back, forward, tick} from '../../Utils/images';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  HomeDots,
  SavingData,
  PortFolioData,
  RecentTransactions,
  KnowledgeData,
  chatData,
} from '../../Utils/data';
import {COLORS} from '../../Utils/theme';

const FamilyDashboard = (props: any) => {
  const __renderSavings = () =>
    SavingData?.map((item, index) => (
      <View key={index} style={styles.savingMain}>
        <View style={styles.familyView}>
          <Image source={item.img} style={styles.familyIcon} />
        </View>
        <Text style={styles.familyViewTitle}>{item.title}</Text>
      </View>
    ));

  const __renderPortFolio = () =>
    PortFolioData?.map((item, index) => (
      <View key={index} style={styles.portInner}>
        <View>
          <Text>{item.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.portSubMain}
          onPress={() => {
            if (item.navigate) {
              props.navigation.navigate(item.navigate);
            }
          }}>
          <Text style={{color: '#7F18D0'}}>{item.subTitle}</Text>
          <Image source={forward} style={styles.portImg} />
        </TouchableOpacity>
      </View>
    ));

  const __renderTransactions = () =>
    RecentTransactions?.map((item, index) => (
      <View key={index} style={styles.portInner}>
        <View style={{flexDirection: 'row'}}>
          <Image source={tick} style={styles.tnsImg} />
          <Text>
            {item.title}
            {'\n'}
            <Text style={{color: '#4B4B4B'}}>{item.subTitle}</Text>
          </Text>
        </View>
        <View style={styles.portSubMain}>
          <Text>${item.price}</Text>
        </View>
      </View>
    ));

  const __renderKnowladge = () =>
    KnowledgeData?.map((item, index) => (
      <View key={index} style={styles.portInner}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.familyView}>
            <Image source={item.img} style={styles.familyIcon} />
          </View>
          <Text style={{marginLeft: wp(2)}}>{item.title}</Text>
        </View>
      </View>
    ));

  const __renderChart = () =>
    chatData.map((item, index) => (
      <View
        style={[
          styles.chartLine,
          {
            height: hp(index * 1.7),
          },
        ]}>
        <View
          style={[
            styles.chartLine2,
            {
              height: index <= 2 ? hp(2) : hp(index),
            },
          ]}
        />
      </View>
    ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.MainContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={back} style={styles.back} />
          </TouchableOpacity>
          <Text style={styles.title}>Family Plus Investments</Text>
          <Image source={dasboard} style={styles.dasboard} />
          <View style={[styles.dotMain]}>
            {HomeDots?.map((item, index) => (
              <Text
                key={index}
                style={[
                  {
                    fontSize: hp(7),
                    color: item.active ? COLORS.primary : COLORS.gray,
                    marginTop: -hp(4),
                  },
                ]}>
                {item?.title}
              </Text>
            ))}
          </View>
          <View style={styles.familyMain}>{__renderSavings()}</View>
          <View style={styles.portMain}>{__renderPortFolio()}</View>
          <View style={styles.portMain}>
            <Text style={styles.trns}>Recent Transactions</Text>
            {__renderTransactions()}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('FamilyDashboard')}
              style={styles.button}>
              <Text style={styles.buttonTitle}>View all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#F4F4F4',
              borderRadius: hp(2),
              marginTop: hp(5),
            }}>
            <Text style={styles.chartTitle}>
              Hypothetical projection of $12000 at age 16
            </Text>
            <View style={styles.chartText}>
              <Text>Investment: $550</Text>
              <Text>Returns: $12,000</Text>
            </View>
            <View style={styles.charts}>{__renderChart()}</View>
          </View>
          <View style={styles.portMain}>
            <Text style={styles.growText}>Grow your Knowledge</Text>
            {__renderKnowladge()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FamilyDashboard;
