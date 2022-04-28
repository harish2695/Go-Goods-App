import './config/database'
import server from './config/server'; './config/server'


const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});