const Organization = require('../models/organizationModel');
const mongoose = require('mongoose');

//get all organizations
const getOrganizations = async (req, res) => {
    const organizations = await Organization.find({}).sort({createdAt: -1});
    res.status(200).json(organizations);
}

//get single organization
const getOrganization = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('No organization with that id');
    }

    const organization = await Organization.findById(id);

    if(!organization){
        return res.status(404).send('No organization with that id');
    }

    res.status(200).json(organization);
}

//create an organization
const createOrganization = async (req, res) => {
    const {name, description} = req.body;

    let emptyFields = [];

    if (!name) {
        emptyFields.push('name');
    }

    if (!description) {
        emptyFields.push('description');
    }

    if (emptyFields.length > 0) {
        return res.status(400).send(`The following fields are required`, emptyFields);
    }

    //add to database
    try {
        const organization = new Organization({
            name,
            description
        });
        res.status(200).json(organization);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//delete an organization
const deleteOrganization = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No organization with that id'});
    }

    const organization = await Organization.findOneAndDelete({_id: id},{
        ...req.body
    })

    if (!organization) {
        return res.status(400).json({error: 'No organization with that id'});
    }

    res.status(200).json(organization);

}

//update an organization
const updateOrganization = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No organization with that id'});
    }

    const organization = await Organization.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!organization) {
        return res.status(400).json({error: 'No organization with that id'});
    }

    res.status(200).json(organization);
}

module.exports = {
    getOrganizations,
    getOrganization,
    createOrganization,
    deleteOrganization,
    updateOrganization
}