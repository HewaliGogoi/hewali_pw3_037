const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {type:String, required:true, minlength:3, maxlength:30},
    lastName : {type:String, required:false, minlength:3, maxlength:30},
    age : {type:Number, required:true, minlength:1, maxlength:150},
    email : {type:String, required:true, unique:true},
    profileImages : [{type:Array, required:true}],
    password: { type: String, required: true, minlength: 8 },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: false,
    }
}, 
{
    timestamps:true
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
});

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;