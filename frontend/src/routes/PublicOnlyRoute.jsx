import { Navigate, Outlet, useOutletContext } from "rect-router-dom";

import { useSelector } from "react-redux"

const PublicOnlyRoute = ( { children }) => {
    const user = useSelector((store) => store.user);

    const context = useOutletContext();

    if(user?.householdId){
        return <Navigate to="items" replace />
    }
    return children ? children : <Outlet context={context} />
}

export default PublicOnlyRoute