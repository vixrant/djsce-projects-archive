import { useState, useEffect } from 'react';
import { useFirebase } from './index';

import { User } from 'firebase';
import { useHistory } from 'react-router-dom';

export function useFirebaseUser() {
  const firebase = useFirebase();
  const [user, setUser] = useState<User>();
  const history = useHistory();

  firebase.auth().onAuthStateChanged((n: any) => {
    setUser(n);
  });

  return user;
}
