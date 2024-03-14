import React, { FC, useEffect, useState } from 'react';
import { User } from '../../model/store/types';
import { Divider, List } from 'antd';
import { FriendItem } from '../FriendItem';
import { GET_USERS } from '../../query';
import { useQuery } from '@apollo/client';

interface FriendsListProps {
    id_group: number;
}
export const FriendsList: FC<FriendsListProps> = ({ id_group }) => {
    const { data, loading } = useQuery(GET_USERS, {
        variables: {
            id: id_group
        }
    });

    const [friends, setFriends] = useState<User[]>(null);

    useEffect(() => {
        if (data && !loading) {
            setFriends(data.getUsers);
        }
    }, [data]);

    if (loading) return <div>Loading...</div>;

    if (!friends || friends.length === 0) return <div>Список пуст</div>;

    return (
        <>
            <Divider orientation="left">Друзья</Divider>
            <List
                size="large"
                bordered
                dataSource={friends}
                renderItem={(friend, index) => (
                    <FriendItem
                        friend={friend}
                        key={friend.first_name + friend.last_name + index}
                    />
                )}
            />
        </>
    );
};
