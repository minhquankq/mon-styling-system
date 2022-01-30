import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "./index";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const User = Template.bind({});
User.args = {
  name: "user",
};

export const Size = Template.bind({});
Size.args = {
  name: "cat",
  size: 48,
};

export const ClassName = Template.bind({});
ClassName.args = {
  name: "cat",
  size: 48,
  className: "fill-primary",
};
