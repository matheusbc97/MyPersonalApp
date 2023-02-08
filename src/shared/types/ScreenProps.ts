import {StackParams} from '@/navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface ScreenProps<T extends keyof StackParams> {
  navigation: NativeStackNavigationProp<StackParams, T>;
  route: RouteProp<StackParams, T>;
}
