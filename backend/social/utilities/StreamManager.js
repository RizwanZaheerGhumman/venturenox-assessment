const Tenant_Profile = require("../Models/TenantProfile/TenantProfile");
const User_Profile = require("../Models/UserProfile/UserProfile");
const processMessageAndInsertIntoDB = async (kafkaMessage) => {
    const { event_name, properties } = kafkaMessage;

    try {
        switch (event_name) {
            case 'tenant_created':
                await Tenant_Profile.create(properties);
                break;
            case 'user_created':
                await User_Profile.create(properties);
                break;
            default:
                console.log('Unhandled event:', event_name);
        }
    } catch (error) {
        console.error('Error processing Kafka message:', error);
    }
};
const processMessage = async (kafkaMessage) => {
    await processMessageAndInsertIntoDB(kafkaMessage);
};

module.exports = { processMessage };

