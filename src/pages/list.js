import React ,{ useEffect} from 'react';

const List = () => {

    const [userList, setuserList] = React.useState();
    const [totalPages, setTotalPages] = React.useState();
    const [activePage, setActivePage] = React.useState(1);

    const fetchList = () => {
        fetch(`https://reqres.in/api/users?page=${activePage}&per_page=5`, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setuserList(data?.data)
                setTotalPages(data?.total_pages)
                
            })
    }

    useEffect(() => {
        fetchList();
    }, [activePage])

    return (
        <>
            <div className='p-5 text-center'>

                <h1>List of users</h1>
                <ul className="list-group">
                    {userList?.length && userList.map(user => <li className="list-group-item list-group-item-action pointer">{user?.first_name +" "+ user?.last_name}</li>)
                    }

                </ul>
                <nav aria-label="...">
                    <ul className="pagination">
                      
                        <li className="page-item disabled">
                            <span className="page-link"  tabindex="-1">Previous</span>
                        </li>
                        {
                    [...Array(totalPages)].map((e, i) =>   <li key={i} className="page-item" onClick={()=>{setActivePage(i+1)}}><span className={ i+1 == activePage ?'page-link active':'page-link'} > {i+1}</span></li>)

                        }
                    
                        <li className="page-item">
                            <span className="page-link" >Next</span>
                        </li>
                    </ul>
                </nav>

            </div>

        </>

    );
}

export default List;