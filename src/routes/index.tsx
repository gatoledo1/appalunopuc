import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../Contexts/auth';

import AppRoutes from './App.routes';
import AuthRoutes from './Auth.routes';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);
 
    return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;