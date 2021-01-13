import Parse from 'parse';

Parse.serverURL = '/parse';
Parse.initialize(process.env.LEXTEGRITY_APP_ID);

export default Parse;
