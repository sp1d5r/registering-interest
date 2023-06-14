// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics, setUserId} from "firebase/analytics";
import { doc, addDoc, getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default analytics;

export async function sendForm(){
    try {
        const docRef = await addDoc(collection(db, "user_info"), info);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

function stringify(item) {
    if (item) {
        return item
    } else {
        return "null"
    }
}

var info={
    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,
    page: stringify(window.location.pathname),
    refferer: stringify(document.referrer),
    browserName: stringify(navigator.appName),
    browserEngine: stringify(navigator.product),
    browserVersion1a: stringify(navigator.appVersion),
    browserVersion1b: stringify(navigator.userAgent),
    browserLanguage: stringify(navigator.language),
    browserOnline: stringify(navigator.online),
    browserPlatform: stringify(navigator.platform),
    javaEnabled: stringify(navigator.javaEnabled()),
    dataCookiesEnabled: stringify(navigator.cookieEnabled),
    dataCookies1: stringify(document.cookie),
    dataCookies2: stringify(decodeURIComponent(document.cookie.split(";"))),
    sizeDocW: stringify(document.width),
    sizeDocH: stringify(document.height)
};

var user_id = undefined;

export function setUserIdFirst() {
    if (user_id) {
    } else {
        user_id = JSON.stringify(info);
        setUserId(analytics, JSON.stringify(info));
    }
}

export async function sendFormDetail(email, name, number, course_title){
    try {
        const docRef = await addDoc(collection(db, "form"), {email: email, name: name, number: number, course_title: course_title, info: user_id});
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function registerInterest(email){
    try {
        const docRef = await addDoc(collection(db, "register-interest"), {email: email, info: user_id});
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

console.log(info)