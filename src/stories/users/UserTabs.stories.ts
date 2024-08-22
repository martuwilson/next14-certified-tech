import UserTabs from "@/components/users/UserTabs";
import type { Meta, StoryObj } from "@storybook/react";



const meta = {
    title: "Users/UserTabs",
    component: UserTabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof UserTabs>

export default meta;
type Story = StoryObj<typeof meta>;

const messages = [
    { name: 'Anakin Skywalker',
      username: 'Anakin',
      message: 'Segundo Mensaje',
      repliesCount: 5
    },
    {
      name: 'Anakin Skywalker',
      username: 'Anakin',
      message: 'Primer Mensaje',
      repliesCount: 3
    }
  ]

  const replies= [
    { name: 'Han Solo',
    username: 'Solo',
    message: 'Tercermensaje',
    repliesCount: 5
    },
    {
        name: 'Anakin Skywalker',
        username: 'Anakin',
    message: 'Primer Mensaje',
    repliesCount: 3
    }
]


export const MessageTab: Story = {
    args: {
        messages: messages,
        replies: replies
    }
}