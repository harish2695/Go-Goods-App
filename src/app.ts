import server from './config';
import './config/database'

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});