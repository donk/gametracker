import { useState, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPBUQ6MbLcCQh6_Q26L8Uo9u_d52Luor4",
  authDomain: "gametracker-ad9e8.firebaseapp.com",
  databaseURL: "https://gametracker-ad9e8.firebaseio.com",
  projectId: "gametracker-ad9e8",
  storageBucket: "gametracker-ad9e8.appspot.com",
  messagingSenderId: "3288706867",
  appId: "1:3288706867:web:8de87ca5948c25aadb1846",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export const anonymousSignin = () => {
  return firebase.auth().signInAnonymously();
};

export const getOwnedGames = (uid = "test1") => {
  return firestore.collection("gameList").doc(uid).get();
};

export const setOwnedGames = (uid = "test1", gameList) => {
  return firestore
    .collection("gameList")
    .doc(uid)
    .set({ owned: gameList }, { merge: true });
};

