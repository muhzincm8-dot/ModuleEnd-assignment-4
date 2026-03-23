import Case from "../models/caseModel.js";

export const createCase = async (req, res) => {
  const newCase = await Case.create(req.body);
  res.status(201).json(newCase);
};

export const updateCase = async (req, res) => {
  const updatedCase = await Case.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedCase);
};
