import React, { FC } from 'react';
import Navbar from "./components/Navbar";
import TodosContainer from "./components/TodosContainer";
import { GlobalProvider } from "./context/AppContext";

const App: FC = () => {

    //useContext -- done
    //useReducer -- done

    //useMemo -- done
    //useCallback -- done

    //useRef -- done

    //checked items to the end -- done

    return (
        <GlobalProvider>
            <Navbar />
            <div className="container">
                <TodosContainer />
            </div>
        </GlobalProvider>
    );
}

export default App;
