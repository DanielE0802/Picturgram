const {Schema, model} = require ('mongoose');
const bcryptjs = require ('bcryptjs')

const UserSchema= new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: String, required: true},
    
},{
    timestamps: true
})

UserSchema.methods.encrypPassword= async password => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt)
};

UserSchema.methods.matchPassword = function(password){
    return await bcryptjs.compare(password, this.password)
}

module.exports= model('User', UserSchema);
