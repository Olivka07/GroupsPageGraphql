import React, { FC, useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { GroupList } from '../components/GroupList';
import './styles/index.scss';
import { useQuery } from '@apollo/client';
import { GET_GROUPS } from '../query';
import { Group } from '../model/store/types';

const App: FC = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [count, setCount] = useState<number>(5);
    const [endOfData, setEndOfData] = useState<boolean>(false);

    const { data, loading, refetch } = useQuery(GET_GROUPS, {
        variables: {
            start: 0,
            end: 5
        }
    });

    const checkScroll = () => {
        const height = window.scrollY + document.scrollingElement.clientHeight;
        if (document.body.clientHeight - Math.ceil(height) <= 0) {
            if (!endOfData) {
                refetch({
                    start: count,
                    end: count + 5
                });
                setCount((prev) => prev + 5);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, [count, endOfData]);

    useEffect(() => {
        if (!loading && data) {
            console.log(data);
            if (data.getGroups.result !== 1 && !endOfData) {
                setGroups((prev) => [...prev, ...data.getGroups.data]);
            } else if (data.getGroups.result === 1 && !endOfData) {
                setGroups((prev) => [...prev, ...data.getGroups.data]);
                setEndOfData(false);
            }
        }
    }, [data]);

    return (
        <main>
            <GroupList groups={groups} />
            {loading && <Loading />}
        </main>
    );
};

export default App;
