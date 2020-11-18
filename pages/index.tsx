import React from 'react';
import AdminComponent from '../components/shared/AdminComponent';
import withAuth from '../components/withAuth';

const Home: React.FC = () => {
    return (
        <AdminComponent>
            <h1>Painel Admin</h1>
        </AdminComponent>
    )
}

export default withAuth(Home);