import { FC, memo } from 'react';

import Icon, { IconProps } from './Icon';

const SubstackIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
      fill="currentColor"
      transform="scale(5.2)"
    ></path>
  </Icon>
));

export default SubstackIcon;
