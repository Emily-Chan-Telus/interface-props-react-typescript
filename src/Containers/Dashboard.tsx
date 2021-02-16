import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext'
import { Button } from '@material-ui/core';
import { getCustomers } from '../Services/testApi';
import OverlayAlert from '../Components/OverlayAlert';
// import { CustomersInterface } from '../interfaces'
import './Dashboard.css';

const Dashboard = () => {
    // const [customers, setCustomers] = useState<CustomersInterface[]>([]);
    const [customers, setCustomers] = useState(null);
    const [state, setState] = useContext(AppContext);

    const loadPeople = async () => {
        const peopleRes = await getCustomers();
        if (peopleRes instanceof Error) {
            console.log("error: ", peopleRes);
            setState((state: any) => ({ ...state, customersError: true }));
        }
        else {
            console.log("success: ", peopleRes);
            setState((state: any) => ({ ...state, customers: peopleRes.results }));
            setState((state: any) => ({ ...state, customersError: false }));
        }
        // else if (peopleRes.Response === "True") {
        //     console.log(peopleRes);
        //   setState(state => ({ ...state, people: peopleRes.Search}));
        //   setState(state => ({ ...state, errorMessage: ''}));
        //}   
        // else {
        //     //setState(state => ({ ...state, errorMessage: peopleRes.Error}));
        //     console.log("error:", peopleRes);
        // }
    }

    return (
        <div className="dashboard">
            <Button onClick={loadPeople}>API Dialog Error</Button>
            <Button>API Toast Error</Button>
            <Button>API Landing Page Error</Button>
            <Button>User Dialog Error</Button>
            <Button>User Toast Error</Button>
        </div>
    );
}

export default Dashboard;