import { Story, Meta } from '@storybook/angular/types-6-0'
import { TitleComponent } from '../title.component';

export default{
    title: 'Components/Title',
    component: TitleComponent
} as Meta

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
    props: args 
})

export const h1 = Template.bind({});
h1.args = {
  title: 'Title',
  variant: 'h1'
};

export const h2 = Template.bind({});
h2.args = {
  title: 'Title',
  variant: 'h2'
};

export const h3 = Template.bind({});
h3.args = {
  title: 'Title',
  variant: 'h3'
};

export const h4 = Template.bind({});
h4.args = {
  title: 'Title',
  variant: 'h4'
};

export const h5 = Template.bind({});
h5.args = {
  title: 'Title',
  variant: 'h5'
};

export const h6 = Template.bind({});
h6.args = {
  title: 'Title',
  variant: 'h6'
};