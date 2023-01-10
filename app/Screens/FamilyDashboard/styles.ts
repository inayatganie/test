import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, FONTS} from '../../Utils/theme';

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
  title: {
    alignSelf: 'center',
    marginVertical: hp(0.5),
    color: '#4B4B4B',
    fontSize: FONTS.h1_7,
  },
  dasboard: {
    height: hp(20),
    width: wp(85),
    resizeMode: 'contain',
    marginVertical: hp(1),
  },
  dotMain: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  familyMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  familyView: {
    height: hp(5),
    width: hp(5),
    backgroundColor: '#F2E1FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  familyViewTitle: {
    fontSize: hp(1.5),
    color: '#353535',
    marginTop: hp(1),
  },
  familyIcon: {
    height: hp(2),
    width: hp(2),
  },
  savingMain: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  portMain: {
    backgroundColor: '#F4F4F4',
    borderRadius: hp(2),
    marginTop: hp(5),
  },
  portInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  portImg: {
    height: hp(2),
    width: wp(2),
    resizeMode: 'contain',
    marginHorizontal: wp(3),
  },
  portSubMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: wp(85),
    height: hp(6),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(1),
  },
  buttonTitle: {
    color: COLORS.white,
    fontSize: FONTS.h2,
    fontWeight: '500',
  },
  growText: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontWeight: '600',
  },
  charts: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingTop: hp(10),
    paddingBottom: hp(3),
  },
  chartText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  chartTitle: {
    marginVertical: hp(4),
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 30,
  },
  trns: {
    marginTop: hp(2),
    marginLeft: wp(4),
    fontWeight: '600',
  },
  tnsImg: {
    height: hp(2.5),
    width: hp(2.5),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  chartLine: {
    width: wp(2),
    backgroundColor: '#EDD9FC',
    borderRadius: hp(1),
    justifyContent: 'flex-end',
  },
  chartLine2: {
    width: wp(2),
    backgroundColor: '#7F18D0',
    borderRadius: hp(1),
  },
});
