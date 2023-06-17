import React from 'react';

const List = () => {

    const [userList, setuserList] = React.useState();

    const fetchList = () => {
        fetch('https://reqres.in/api/users?page=1&per_page=5', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setuserList(data?.data)
            })
    }

    React.useEffect(() => {
        fetchList();
    }, [])
    
    return (
        <>
            <h1>List of users</h1>
            <li>
                {userList?.length && userList.map(item => <ul>{item.email}</ul>)
                }
                <ul></ul>
            </li>
        </>

    );
}

export default List;