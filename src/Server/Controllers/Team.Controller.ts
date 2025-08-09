import TeamModel from "../Models/Team.Model.ts";

export const createTeam = async (req: any, res: any) => {
    try {
        const newTeam = new TeamModel(req.body);
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ message: "Error creating team", error });
    }
};
