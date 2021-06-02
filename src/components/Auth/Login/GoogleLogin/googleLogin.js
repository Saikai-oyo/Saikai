import React from 'react';
import firebase from 'firebase/app';
import { app } from '../../../../config/firebase';

const signupWithGoogle = (user, userInfo) => {
    app.firestore().collection('users').doc(user.uid).set({
        firstName: userInfo.profile.given_name,
        lastName: userInfo.profile.family_name,
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
        const docRef = app.firestore().collection('users').doc(user.uid).collection('columns').doc(Object.keys(doc)[0]);
        batch.set(docRef, Object.values(doc)[0]);
    });
    const batchCommit = batch.commit();
    return batchCommit;
};

export const googleLogin = async (history) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase
        .auth()
        .signInWithPopup(provider)
        .then((resp) => {
            let { user, additionalUserInfo: userInfo } = resp;
            if (userInfo.isNewUser) signupWithGoogle(user, userInfo);
            setTimeout(() => {
                history.push('/');
            }, 0);
        })
        .catch((error) => {
            console.error(error.message);
        });
};
