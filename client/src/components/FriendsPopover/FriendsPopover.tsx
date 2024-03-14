import React, { FC } from 'react';
import { Button, Popover } from 'antd';
import { FriendsList } from '../FriendsList';

interface FriendsPopoverProps {
    id_group: number;
}
export const FriendsPopover: FC<FriendsPopoverProps> = ({ id_group }) => {
    return (
        <Popover content={<FriendsList id_group={id_group} />} trigger="click">
            <Button>Друзья-подписчики</Button>
        </Popover>
    );
};
