module.exports = (client) => {
  const ms = require('ms')
  
    const status = [
         {name: 'Como um bot pode jogar?', type: 'PLAYING'},
         {name: 'Anime\'s Night - https://discord.gg/kZq7GAV', type: 'PLAYING'},
         {name: 'Paz e Amor para os membros do AN', type: 'STREAMING', url: 'https://twitch.tv/teste'},
         {name: `${client.users.cache.size} usuários`, type: 'WATCHING'},
         {name: 'Spotify', type: 'LISTENING'}
     ]
      function Presence() {
          const base = status[Math.floor(Math.random() * status.length)]
          client.user.setActivity(base)
      }
      Presence();
      setInterval(() => Presence(), ms("15s"))
}