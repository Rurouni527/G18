import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextComponent = (props) => {
    const [prods, setProds] = useState([]);

    const objeto = {
        prods,
        setProds,
    };

    return <AppContext.Provider value = { objeto } > { props.children } < /AppContext.Provider>;
};

export default AppContextComponent;