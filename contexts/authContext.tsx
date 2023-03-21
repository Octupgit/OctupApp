import React, {createContext, useState, useContext} from 'react';

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
};

type AuthData = {
    token: string;
    email: string;
    name: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState({});
    //The loading part will be explained in the persist step session
    const [loading, setLoading] = useState(true);

    const signIn = async () => {
        //call the service passing credential (email and password).
        //In a real App this data will be provided by the user from some InputText components.
        const _authData = {
            username: 'benzaad@gmail.com',
            password: '123456',
        }

        //Set the data in the context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(_authData);
    };

    const signOut = async () => {
        //Remove data from context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(undefined);
    };

    return (
        //This component will be used to encapsulate the whole App,
        //so all components will have access to the Context
        <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
    {children}
    </AuthContext.Provider>
);
};
export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    console.log('CONTEXT',context)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context as AuthContextData;
}