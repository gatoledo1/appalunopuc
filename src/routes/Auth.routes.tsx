import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Slider from '../pages/Login/intro';
import AuthContext from '../Contexts/auth';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {

    const { introLogin } = useContext(AuthContext);

    console.log(!introLogin)
    console.log(!!introLogin)
    console.log(introLogin)

    return !!introLogin ? <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                            <AuthStack.Screen name="Login" component={Login} />
                        </AuthStack.Navigator>
                        : 
                        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
                            <AuthStack.Screen name="Slider" component={Slider} />
                        </AuthStack.Navigator>;

}

export default AuthRoutes;