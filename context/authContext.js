import { createContext, useEffect,useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext();




const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }

}



export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {user: null, isAuthenticated: false});

    useEffect(() => {
        const loadUser = async () => {
            try {
                const user = await AsyncStorage.getItem("user");
                if (user) {
                    dispatch({
                        type: "LOGIN",
                        payload: JSON.parse(user),
                    });
                }
            } catch (error) {
                console.error("Failed to load user", error);
            }
        };

        loadUser();
    }, []);


    return <AuthContext.Provider value={{...state,dispatch}}>{children}</AuthContext.Provider>;
}