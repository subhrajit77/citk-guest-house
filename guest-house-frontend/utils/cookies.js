import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function saveJWT(name, jwt) {
    const decoded = jwtDecode(jwt);
    const expiration = decoded.exp;
    const now = Date.now() / 1000;
    const time = expiration - now;
    const expiry_days = time / 60 / 60 / 24;
    Cookies.set(name, jwt, { expires: expiry_days });
}
