// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from '../input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Input',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'Input',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'Input',
};
