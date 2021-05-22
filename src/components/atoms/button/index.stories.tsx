import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from './';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const ButtonStory = Template.bind({});
Template.storyName = 'atoms/Button';
ButtonStory.args = {
  label: 'label',
  onClick: () => console.log('clicked'),
};
