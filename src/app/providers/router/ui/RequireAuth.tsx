import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserAuthData, getUserRoles} from "entities/User";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {UserRole} from "entities/User/model/types/user";
import {useMemo} from "react";

interface IRequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export default function RequireAuth(props: IRequireAuthProps) {
    const {children, roles} = props;

    const location = useLocation();
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some(role => userRoles?.includes(role));

    }, [roles, userRoles])
    
    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace/>;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{from: location}} replace/>;
    }

    return children;
}