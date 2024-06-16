import mongoose from "mongoose";

const TextSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },   

},
{
    timestamps: true,
});

export default mongoose.model('Text', TextSchema);