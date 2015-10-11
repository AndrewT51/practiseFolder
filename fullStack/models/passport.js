var Mongoose = require('mongoose');
var Hash = require('password-hash');
var Schema = Mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String },
    password: { type: String, set: function(newValue) {
        return Hash.isHashed(newValue) ? newValue : Hash.generate(newValue);
    } },

});

UserSchema.statics.authenticate = function(email, password, callback) {
    this.findOne({ email: email }, function(error, user) {
        if (user &amp;&amp; Hash.verify(password, user.password)) {
            callback(null, user);
        } else if (user || !error) {
            // Email or password was invalid (no MongoDB error)
            error = new Error("Your email address or password is invalid. Please try again.");
            callback(error, null);
        } else {
            // Something bad happened with MongoDB. You shouldn't run into this often.
            callback(error, null);
        }
    });
};

var User = mongoose.model(UserSchema);

var passport = require('passport');
var PassportLocalStrategy = require('passport-local');

var authStrategy = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(email, password, done) {
    User.authenticate(email, password, function(error, user){
        // You can write any kind of message you'd like.
        // The message will be displayed on the next page the user visits.
        // We're currently not displaying any success message for logging in.
        done(error, user, error ? { message: error.message } : null);
    });
});

var authSerializer = function(user, done) {
    done(null, user.id);
};

var authDeserializer = function(id, done) {
    User.findById(id, function(error, user) {
        done(error, user);
    });
};

passport.use(authStrategy);
passport.serializeUser(authSerializer);
passport.deserializeUser(authDeserializer);

// ... continue with Express.js app initialization ...
app.use(require('connect-flash')()); // see the next section
app.use(passport.initialize());