//contrato esquema de un User//

const {mongoose, schema} = require(`mongoose`);
const userModels = mongoose.model(`users`, userSchema);
const userSchema = schema ({
    name: String,
    email: String,
    password: String,
    age: Number,
    role: String,
    address: String,
    //token: String,
    //token_expiration: Date,
    //resetPasswordToken: String,
    //resetPasswordExpires: Date,
    //last_login: Date,
    //last_logout: Date,
    //last_activity: Date,
    //last_login_ip: String,
    //last_logout_ip: String,
    //last_activity_ip: String,
})

module.exports = userModels;

