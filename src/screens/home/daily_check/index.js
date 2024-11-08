// src/screens/home/daily_check/index.js

import { useNavigation } from '@react-navigation/native';
import { Dimensions, Text } from 'react-native';
import theme from '../../../theme.js'; // 개발 규칙: 폰트 적용
import styles from './styles.js'; //스타일 불러오기 // 개발 규칙: stylesheet 분리
const width_ratio = Dimensions.get('screen').width / 390; // 개발 규칙: 상대 크기 적용
const height_ratio = Dimensions.get('screen').height / 844; // 개발 규칙: 상대 크기 적용

const Daily_check_screen = () => {
    const navigation = useNavigation();
    return (
        <Text style={{ color: 'black' }}>  src/screens/home/daily_check/index.js</Text>
    );
}

export default Daily_check_screen;