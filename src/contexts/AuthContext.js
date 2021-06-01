import React, { useContext, useState, useEffect } from 'react';
import { auth, app } from '../config/firebase';

import { UserDetailsContext } from './UserDetailsContext';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const { setUserDetails } = useContext(UserDetailsContext);

    /**
     * @todo: do this!*/
    const signup = ({ email, password, firstName, lastName }) => {
        auth.createUserWithEmailAndPassword(email, password).then((resp) => {
            app.firestore().collection('users').doc(resp.user.uid).set({
                firstName,
                lastName,
            });

            const batch = app.firestore().batch();
            const initData = [
                { Applied: { positionIds: [], title: 'Applied' } },
                { Contract: { positionIds: [], title: 'Contract' } },
                { Denied: { positionIds: [], title: 'Denied' } },
                { InProgress: { positionIds: [], title: 'In Progress' } },
                { ReceivedTask: { positionIds: [], title: 'Received Task' } },
            ];

            initData.forEach((doc) => {
                const docRef = app
                    .firestore()
                    .collection('users')
                    .doc(resp.user.uid)
                    .collection('columns')
                    .doc(Object.keys(doc)[0]);
                batch.set(docRef, Object.values(doc)[0]);
            });
            return batch.commit();
        });
    };

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const logout = () => {
        return auth.signOut();
    };

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    };

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);  

      app
        .firestore()
        .collection('users')
        .doc(`${user.uid}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setUserDetails({
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              loading: false,
            });
          } else {
            console.info('No document found!');
          }
        })
        .catch((err) => console.error(err));
    });

    return ()=>unsubscribe;
  }, [setUserDetails]);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updatePassword,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
