const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const prefix = config.prefix;

client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  const handleCommand = (command, func) => {
    if (message.content === command)
      func();
  }

  handleCommand(`${prefix}ping`, () => {
    message.channel.send('Pong.');
  });

  handleCommand(`${prefix}server`, () => {
    message.channel.send(`This server's name is: ${message.guild.name}`);
  });

  handleCommand(`${prefix}thisperson`, () => {
    let rand = Math.floor((Math.random() * 2) +  1)
    if (rand === 1){
      message.channel.send(`<@153418694540656640> is the cool.`)
    }
    else{
      message.channel.send(`<@147887076476583936> is the cool.`)
    }
  });

  handleCommand(`${prefix}getuser`, () => {
    let user = client.users.member("hucktuck");
    message.channel.send(`${user}`);
});

  //handleCommand(`${prefix}notify`, (a) => setTimeout

});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'stupidtextchannel');
  if (!channel) return;
  channel.send(`Welcome to Team Jet, ${member}`);
});

client.login(config.token);
