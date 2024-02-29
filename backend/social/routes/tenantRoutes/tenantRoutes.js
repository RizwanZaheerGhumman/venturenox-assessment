const express = require('express');
const router = express.Router();
const Tenant_Profile = require('../../Models/TenantProfile/TenantProfile');

router.post('/tenant-profile', async (req, res) => {
    try {
        const tenantProfile = await Tenant_Profile.create(req.body);
        res.status(201).json(tenantProfile);
    } catch (error) {
        console.error('Error creating tenant profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/tenant-profiles', async (req, res) => {
    try {
        const tenantProfiles = await Tenant_Profile.findAll();
        res.json(tenantProfiles);
    } catch (error) {
        console.error('Error fetching tenant profiles:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/tenant-profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const tenantProfile = await Tenant_Profile.findByPk(id);
        if (!tenantProfile) {
            res.status(404).send('Tenant profile not found');
        } else {
            res.json(tenantProfile);
        }
    } catch (error) {
        console.error('Error fetching tenant profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.patch('/tenant-profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [updatedRowsCount] = await Tenant_Profile.update(req.body, {
            where: { id: id },
        });
        if (updatedRowsCount === 0) {
            res.status(404).send('Tenant profile not found');
        } else {
            res.status(200).send('Tenant profile updated successfully');
        }
    } catch (error) {
        console.error('Error updating tenant profile:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/tenant-profile/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRowCount = await Tenant_Profile.destroy({
            where: { id: id },
        });
        if (deletedRowCount === 0) {
            res.status(404).send('Tenant profile not found');
        } else {
            res.status(204).send('Tenant profile deleted successfully');
        }
    } catch (error) {
        console.error('Error deleting tenant profile:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
