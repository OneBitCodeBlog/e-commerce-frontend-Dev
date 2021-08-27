import React from 'react';
import AdminComponent from '../../components/shared/AdminComponent';
import withAuthAdmin from '../../components/withAuthAdmin';

import Dashboard from '../../components/Admin/Dashboard';

const Home: React.FC = () => {
    return (
    <AdminComponent>
        <Dashboard/>
    </AdminComponent>
    )
}

export default withAuthAdmin(Home);