import {createContext} from "react";

export const AuthContext = createContext(null);

export const BlogContext = createContext({posts: [], edit: {}});