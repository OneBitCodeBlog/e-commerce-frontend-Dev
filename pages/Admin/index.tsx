import React from 'react';
import AdminComponent from '../../components/shared/AdminComponent';
import withAuthAdmin from '../../components/withAuthAdmin';

const Home: React.FC = () => {
    return (
    <AdminComponent>
        <h1>Painel Admin</h1>
    </AdminComponent>
    )
}

export default withAuthAdmin(Home);