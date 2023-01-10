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
  getStartedImg: {
    height: hp(25),
    width: wp(65),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp(3),
  },
  headingView: {
    marginTop: hp(1),
    alignSelf: 'center',
    width: wp(80),
    alignItems: 'center',
  },
  heading: {
    fontSize: FONTS.h3,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: hp(4),
  },
  subHeading: {
    fontSize: FONTS.h1_6,
    lineHeight: hp(2.2),
    fontWeight: '300',
    textAlign: 'center',
  },
  dotMain: {
    flexDirection: 'row',
    alignSelf: 'center',
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
});
