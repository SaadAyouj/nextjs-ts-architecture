import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideBar, { ISideBar } from './SideBar';
import { mockSideBarProps } from './SideBar.mocks';

export default {
  title: 'common/sidebar/SideBar',
  component: SideBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SideBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSideBarProps.base,
} as ISideBar;
