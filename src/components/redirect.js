import { navigate } from '@reach/router';
import redirects from '../../static/api/redirects.json';

export default function Redirect({ redirectName }) {
  navigate(redirects[redirectName]);
  return null;
}
