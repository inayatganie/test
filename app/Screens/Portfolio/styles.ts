import {StyleSheet, PixelRatio} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../Utils/theme';

const radius = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 30;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  MainContainer: {
    width: wp(85),
    alignSelf: 'center',
    marginTop: hp(5),
  },
  back: {
    height: hp(4),
    width: wp(4),
    resizeMode: 'contain',
  },
  ring: {
    // position: 'absolute',
    width: hp(3),
    height: hp(3),
    borderRadius: hp(50),
    borderColor: '#1826D0',
    borderWidth: 4,
  },
  cirecleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringChartContainer: {
    width: radius * 2,
    height: radius * 2,
  },
  container1: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portImg: {
    height: hp(2),
    width: wp(2),
    resizeMode: 'contain',
    marginHorizontal: wp(3),
  },
  portInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(3),
    paddingHorizontal: wp(4),
    backgroundColor: '#F4F4F4',
    marginVertical:hp(1),
    borderRadius:hp(1)
  },
  button: {
    width: wp(85),
    height: hp(6),
    backgroundColor: '#C2C7FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1),
    marginTop:hp(3)
  },
  buttonTitle: {
    color: '#4B4B4B',
    fontSize: FONTS.h2,
    fontWeight: '500',
  },
  port:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(3),
    paddingHorizontal: wp(4),
    backgroundColor: '#F4F4F4',
    marginVertical: hp(1),
    borderRadius: hp(1),
  },
  backMain:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question:{
    height: hp(3),
    width: hp(3),
    borderColor: '#',
    borderWidth: 2,
    borderRadius: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mark:{
    color: '080D45', fontWeight: 'bold'
  },
  title:{
    alignSelf: 'center',
    marginVertical: hp(3),
    color: '#080D45',
    fontSize: hp(3),
    fontWeight: '600',
  },
  ringMain:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: hp(3),
  }
});
