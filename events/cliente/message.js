module.exports = (client, message) => {
  const config = require("../../config.json")
    let prefix = `${config.prefix}`
    let emoji1 = "<a:kanna_ping:756663300976148481>"
 
 
  if (message.author.bot) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`))
   return message.channel.send(`${emoji1} | Olá ${message.author}, meu prefixo é \`${prefix}\`\nDigite \`${prefix}help\` para mais informações sobre o que eu posso fazer`)
   
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    
    let cmd = args.shift().toLowerCase()
    if(cmd.length === 0) return;
 
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd))
    if(command) command.run(client, message, args)
   
 
    if(!command) return message.reply(`comando não encontrado, digite \`${prefix}help\` para mais informações`)
}