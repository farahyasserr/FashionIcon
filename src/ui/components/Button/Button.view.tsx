import {TouchableOpacity, ViewStyle} from 'react-native';
import TextView from '../Text/Text.view';
import ButtonStyles from './Button.styles';

type ButtonComponent = {
  backgroundColor?: string;
  title: string;
  titleColor?: string;
  fontFamily?: string;
  viewStyle?: ViewStyle;
};

const Button = ({
  backgroundColor,
  title,
  titleColor,
  fontFamily,
  viewStyle,
}: ButtonComponent): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        ...ButtonStyles.buttonContainer,
        backgroundColor: backgroundColor,
        ...viewStyle,
      }}>
      <TextView color={titleColor} fontFamily={fontFamily}>
        {title}
      </TextView>
    </TouchableOpacity>
  );
};

export default Button;
