import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  children: "Button",
  disabled: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: "Button",
  rounded: true,
  secondary: true,
  size: "large",
};
