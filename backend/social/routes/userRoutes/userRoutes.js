const express = require('express');
const router = express.Router();
const User_Profile = require('../../Models/UserProfile/UserProfile');

router.post('/user-profile', async (req, res) => {
    try {
        const userProfile = await User_Profile.create(req.body);
        res.status(201).json(userProfile);
        res.status(201).json({ message: 'User profile created successfully' });
    } catch (error) {
        console.error('Error creating user profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/user-profiles', async (req, res) => {
    try {
        const userProfiles = await User_Profile.findAll();
        res.json(userProfiles);
    } catch (error) {
        console.error('Error fetching user profiles:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/user-profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const userProfile = await User_Profile.findByPk(id);
        if (!userProfile) {
            res.status(404).send('User profile not found');
        } else {
            res.json(userProfile);
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.patch('/user-profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [updatedRowsCount] = await User_Profile.update(req.body, {
            where: { id: id },
        });
        if (updatedRowsCount === 0) {
            res.status(404).send('User profile not found');
        } else {
            res.status(200).send('User profile updated successfully');
        }
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/user-profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRowCount = await User_Profile.destroy({
            where: { id: id },
        });
        if (deletedRowCount === 0) {
            res.status(404).send('User profile not found');
        } else {
            res.status(204).send('User profile deleted successfully');
        }
    } catch (error) {
        console.error('Error deleting user profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
