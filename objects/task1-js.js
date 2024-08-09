const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
]
const usersOnlineNames = users.filter(elem => elem.status === 'online').map(names => names.username).join`, `
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)

