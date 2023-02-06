import {StackParams} from '@/navigation';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface ScreenProps<T extends keyof StackParams> {
  navigation: StackNavigationProp<StackParams, T>;
  route: RouteProp<StackParams, T>;
}
