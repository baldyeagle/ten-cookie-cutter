import { Button as NBButton } from 'native-base';

export const Button = ({testID = 'button', ...rest}) => {
  return <NBButton testID={testID} {...rest}>Boop</NBButton>;
};
