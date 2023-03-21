import React, {createContext, useState, useContext} from 'react';

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    signIn({}:AuthData): Promise<void>;
    signOut(): void;
};

type AuthData = {
    email: string;
    name: string;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState({});
    //The loading part will be explained in the persist step session
    const [loading, setLoading] = useState(true);

    const signIn = async ({email, password}) => {
        //call the service passing credential (email and password).
        //In a real App this data will be provided by the user from some InputText components.
        console.log('IN signIn username',email)
        const _authData = {
            email,
            password,
            token: 'test'
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
        <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
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