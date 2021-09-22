module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} is online\nIf no slash commands come make sure to run the command\nnode deploy-commands.js`);
    },
};