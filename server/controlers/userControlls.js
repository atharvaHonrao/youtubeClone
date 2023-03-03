import alert from 'alert'
// import popup from 'popup'
import { dirname } from 'path';
import UserModel from '../models/user_schema.js'
import Realm from "realm";
import { fileURLToPath } from 'url';

const app = new Realm.App({
    id: "ytclone-ixvfb",
});

const __dirname = dirname(fileURLToPath(import.meta.url));

class UserControlsers {

    static home = async (req, res) => {

        // res.sendFile(path.join(__dirname + '/register.html'));
        res.render('register')
    }

    static loginpage = async (req, res) => {

        // res.sendFile(path.join(__dirname + '/login.html'));
        res.render('login')

    }

    static homepage = async (req, res) => {

        // res.sendFile(path.join(__dirname + '/home.html'));
        res.render('home')
    }

    static upload = async (req, res) => {

        res.render('upload')
    }


    static userlogin = async (req, res) => {

        // try {
        //     const { email, pass } = req.body;
        //     const result = await UserModel.findOne({ email: email });
        //     if (result == null) {
        //        console.log("successful bc")
        //     }
        //     if (result.pass == pass) {
        //         res.redirect('/home');
        //         alert("Login Succesful!!");
        //     }
        //     else {
        //         alert("Wrong Password");
        //     }
        // } catch (error) {
        //     console.log(error)

        // Initialize your App.  

        try {
            const { email, pass } = req.body;
            const result = await UserModel.findOne({ email: email });
            await app.logIn(Realm.Credentials.emailPassword(email, pass));
            
          } catch (err) {
            console.error("Failed to log in", err.message);
          }
          
          const userEmail = app.currentUser.profile.email;
          

        
        // res.sendFile(path.join(__dirname + '/login.html'));
    }

    static homepost = async (req, res) => {


        try {

            const doc = new UserModel({

                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                pass: req.body.pass,

            })

            await app.emailPasswordAuth.registerUser({
                email: email,
                password: pass
              });

            await doc.save().then(() => {
                console.log("success")
            }).catch((err) => {
                // console.log
            })
        } catch (error) {
            console.log(error)

        }          

        // res.sendFile(path.join(__dirname + '/login.html'));
        res.redirect('/login');


    }

}

export default UserControlsers;