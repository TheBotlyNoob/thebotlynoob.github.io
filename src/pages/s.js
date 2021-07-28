import React from 'react';
import { navigate } from '@reach/router';

export default function S() {
  React.useEffect(() => navigate('/'), []);
  return null;
}
