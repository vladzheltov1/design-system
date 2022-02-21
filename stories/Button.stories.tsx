import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, IButtonProps } from '../src/components/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
};

export default meta;

export const Primary: Story<IButtonProps> = args => <Button {...args}>Кнопка</Button>;
export const Secondary: Story<IButtonProps> = args => <Button {...args} appearance="secondary">Кнопка</Button>;
export const Success: Story<IButtonProps> = args => <Button {...args} appearance="success">Кнопка</Button>;
export const Warning: Story<IButtonProps> = args => <Button {...args} appearance="warning">Кнопка</Button>;
export const Danger: Story<IButtonProps> = args => <Button {...args} appearance="danger">Кнопка</Button>;
export const Dark: Story<IButtonProps> = args => <Button {...args} appearance="dark">Кнопка</Button>;
export const Ghost: Story<IButtonProps> = args => <Button {...args} ghost>Кнопка</Button>;
