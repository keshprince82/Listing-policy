import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { useHistory } from 'react-router-dom';

const List = ({ fetchList, users }) => {

    const history = useHistory()

    const [userList, setuserList] = React.useState(users.data);
    const [totalPages, setTotalPages] = React.useState(users.total_pages);
    const [activePage, setActivePage] = React.useState(1);

    useEffect(() => {
        setuserList(users.data)
        setTotalPages(users.total_pages)

    }, [users])

    return (
        <>
            <div className='p-5 text-center'>

                <h1>List of users</h1>
                <ul className="list-group" style={{ minHeight: 240 }}>
                    {userList?.length && userList.map(user => <li onClick={() => { history.push(`/details/${user?.id}`) }} className="list-group-item list-group-item-action pointer">{user?.first_name + " " + user?.last_name}</li>)
                    }

                </ul>
                <div className='pag-block mt-4'>
                    <nav aria-label="...">
                        <ul className="pagination pointer">

                            <li className={activePage == 1 ? "page-item disabled" : 'page-item'}>
                                <span className="page-link" onClick={() => { setActivePage(activePage - 1); fetchList(activePage - 1) }} tabindex="-1">Previous</span >
                            </li>
                            {
                                [...Array(totalPages)].map((e, i) => <li key={i} className="page-item" onClick={() => { setActivePage(i + 1); fetchList(i + 1) }}><span className={i + 1 == activePage ? 'page-link active' : 'page-link'} > {i + 1}</span></li>)

                            }

                            <li className={activePage == totalPages ? "page-item disabled" : "page-item"}>
                                <span className="page-link" onClick={() => { setActivePage(activePage + 1); fetchList(activePage + 1) }} >Next</span>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>

        </>

    );
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        ...state
    }
}


export default connect(mapStateToProps)(List);