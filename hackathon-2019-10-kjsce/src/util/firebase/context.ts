import React from "react";
import { app } from "firebase";

const FirebaseContext = React.createContext<app.App | undefined>(undefined);

export default FirebaseContext;
