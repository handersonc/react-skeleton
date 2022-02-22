// Header.stories.ts|tsx

import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Header from "./Header"

export default {
  title: "Header",
  component: Header
} as ComponentMeta<typeof Header>

const HeaderTemplate: ComponentStory<typeof Header> = () => <Header />

export const LoggedIn = HeaderTemplate.bind({});

