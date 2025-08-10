import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    leaderName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    leaderEmail: {
        type: String,
        required: true
    },
    teamSize: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teamMembers: [{
        name: String,
        email: String
    }],
    pptLink: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Team', teamSchema);