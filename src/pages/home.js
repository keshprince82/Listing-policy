import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

const Home = () => {

    let history = useHistory()

    useEffect(() => {
        history.push('/lists')
    }, [])
    
    return (
        <h1> Ridercting to dashobard</h1>
    );
}

export default Home;