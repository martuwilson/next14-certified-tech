import ExploreTrending from "@/components/explore/ExploreTrending";

import type { Meta, StoryObj } from "@storybook/react";



const meta = {
    title: "Explore/ExploreTrending",
    component: ExploreTrending,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ExploreTrending>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
       hashes: [
        {
            hash: "Tatooine",
            count: 5
        },
        {
            hash: "Dagobah",
            count: 3
        }
       ]
    }
}

export const MoreThan2: Story = {
    args: {
       hashes: [
        {
            hash: "Tatooine",
            count: 5
        },
        {
            hash: "Dagobah",
            count: 3
        },
        {
            hash: "Hoth",
            count: 2
        },
        {
            hash: "Endor",
            count: 1
        }
       ]
    }
}

export const Empty: Story = {
    args: {
       hashes: []
    }
}