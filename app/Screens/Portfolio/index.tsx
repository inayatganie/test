import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {back, forward} from '../../Utils/images';
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AggressivePortfolio} from '../../Utils/data';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
//@ts-ignore
import {PieChart, PieChartData} from 'react-native-svg-charts';
import Svg, {Circle, Line, G, Text as TextNew} from 'react-native-svg';

interface LabelsProps {
  slices: {
    pieCentroid: string;
    labelCentroid: string;
    data: PieChartData;
  }[];
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FamilyDashboard = (props: any) => {
  const progress = useSharedValue(0);
  const width = hp(6);
  const height = hp(6);
  const circle_length = width * 2;
  const R = circle_length / (2 * Math.PI);

  useEffect(() => {
    progress.value = withTiming(1, {duration: 2000});
  }, []);
  
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circle_length * progress.value,
  }));

  const Ring = ({fill}: any) => {
    return (
      <Animated.View
        style={[
          styles.ring,
          fill && {
            backgroundColor: '#1826D0',
          },
        ]}
      />
    );
  };

  const RingAnimated = (percentage: any) => {
    return (
      <View
        style={{
          height: hp(6),
          width: hp(6),

          justifyContent: 'center',
        }}>
        <Text
          style={{
            position: 'absolute',
            alignSelf: 'center',
            fontSize: hp(1),
          }}>
          {percentage}%
        </Text>
        <Svg
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Circle
            cx={width / 2}
            cy={height / 2}
            r={R}
            stroke={'#EDEEF7'}
            strokeWidth={5}
          />
          <AnimatedCircle
            cx={width / 2}
            cy={height / 2}
            r={R}
            stroke={'#1826D0'}
            strokeWidth={5}
            strokeDasharray={circle_length / 1.5}
            animatedProps={animatedProps}
          />
        </Svg>
      </View>
    );
  };

  const __renderPortFolio = () =>
    AggressivePortfolio?.map((item, index) => (
      <View key={index} style={styles.port}>
        <Text
          style={{
            width: wp(50),
          }}>
          {item.title}
        </Text>
        {RingAnimated(item.percentage)}
        <Image source={forward} style={styles.portImg} />
      </View>
    ));

  const Labels = (props: Partial<LabelsProps>) => {
    const {slices} = props as LabelsProps;
    return (
      <>
        {slices.map((slice, index) => {
          const {labelCentroid, pieCentroid, data} = slice;
          return (
            <G key={index}>
              <Line
                x1={labelCentroid[0]}
                y1={labelCentroid[1]}
                x2={pieCentroid[0]}
                y2={pieCentroid[1]}
                stroke={data?.svg && data.svg.fill}
              />
              <G x={labelCentroid[0]} y={labelCentroid[1]}>
                <TextNew
                  x={index > 2 ? 20 : -4}
                  y={1.5}
                  fill={'black'}
                  textAnchor={'end'}
                  fontSize={16}>
                  {data.key}
                </TextNew>
              </G>
            </G>
          );
        })}
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.MainContainer}>
          <View
            style={styles.backMain}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={back} style={styles.back} />
            </TouchableOpacity>
            <View
              style={styles.question}>
              <Text style={styles.mark}>?</Text>
            </View>
          </View>
          <Text
            style={styles.title}>
            Aggressive Portfolio
          </Text>
          <View
            style={styles.ringMain}>
            <Ring fill={false} />
            <Ring fill={false} />
            <Ring fill={false} />
            <Ring fill={true} />
            <Ring fill={false} />
          </View>
          <PieChart
            data={[
              {
                key: 'a1',
                value: 10,
                svg: {fill: '#C2C7FF'},
              },
              {key: 'a2', value: 10, svg: {fill: '#EEEFFF'}},
              {key: 'a2', value: 10, svg: {fill: '#7982FA'}},
              {key: 'a3', value: 40, svg: {fill: '#1826D0'}},
            ]}
            style={{height: hp(25)}}
            outerRadius={'100%'}
            innerRadius={'60%'}
            padAngle={0}
            labelRadius={120}>
            <Labels />
          </PieChart>

          <View
            style={{
              borderRadius: hp(2),
              marginTop: hp(5),
            }}>
            {__renderPortFolio()}
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('FamilyDashboard')}
            style={styles.button}>
            <Text style={styles.buttonTitle}>This portfolio is selected</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FamilyDashboard;
