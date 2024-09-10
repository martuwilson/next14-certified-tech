import React, { useState } from 'react'
import UserCard, { UserCardLayout } from '../users/UserCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TrendingUserType, UserType } from '@/types/user.types';
import exploreApi from '@/services/explore/explore.service';
import { PageType } from '../../types/pagination.types';


type UserListProps = {
    initialUserPage: PageType<TrendingUserType>
}

const UserList = ({initialUserPage}: UserListProps) => {
    
    const [page, setPage] = useState<PageType<TrendingUserType>>(initialUserPage)
    const [users, setUsers] = useState<TrendingUserType[]>(initialUserPage.content || [])

    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1
        const response = await exploreApi.getFollowRecommendations(pageNumber, 20)
        setPage(response)
        setUsers(prevMessages => [...users, ...response.content])
    }

    const refresh = async () => {
        const response = await exploreApi.getFollowRecommendations(0, 20)
        setPage(response)
        setUsers(response.content)
        
    }

    return (


        <InfiniteScroll
            dataLength={users.length}
            next={fetchData}
            hasMore={!page.pagination.last}
            loader={<h4>Cargando más mensajes</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>¡Yay! Ya viste todo</b>
                </p>
            }
            refreshFunction={refresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Baja para refrescar</h3>
            }
            releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Suelta para refrescar</h3>
            }
        >
              {users.map((user, index) => (
            <UserCard key={`user-explore-${index}`}
                user={user}
                layout={UserCardLayout.VERTICAL}
            />
            )
            )}
        </InfiniteScroll>

    )
}

export default UserList