import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';


const Details = ({ fetchList, users }) => {

    const history = useHistory()

    const [userDetails, setUserDetails] = React.useState([]);

    const getUserDetails = (id) => {
        let userInfo = users?.data?.find(item => item.id == id)
        if (userInfo) {
            setUserDetails(userInfo)

        } else {
            history.push('/lists')
        }

    }

    useEffect(() => {
        if (users && users.data) {
            getUserDetails(history.location.pathname.split('/')[2])

        }

    }, [users])

    return (
        <>
            <div className='p-5 text-center '>

                <h1>Details of users</h1>
                <img style={{ borderRadius: '50%' }} src={userDetails?.avatar}></img>
                <div>
                    <span className='fw-bold'>Name</span>   :   <span >{userDetails?.first_name + " " + userDetails?.last_name}</span> <br />
                    <span className='fw-bold'>Email</span>  :  <span >{userDetails?.email}</span>

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


export default connect(mapStateToProps)(Details);