import { Story, Meta } from '@storybook/angular/types-6-0';
import { SelectComponent } from '../select.component';

export default{
  title: 'Components/Select',
  component: SelectComponent
} as Meta

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
    props: args
})

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Select',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'Select',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'Select',
};
