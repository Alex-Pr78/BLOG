import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { checkAccess } from '../../utils'
import { Error } from '../../error';
import { ERROR } from '../../constants';

export const Content = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access,userRole) ? null : ERROR.ACCESS_DENIED;
	const error = accessError || serverError;
	return error ? <Error error={error} /> : children;
}

