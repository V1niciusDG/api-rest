import { server } from "./server/server";

server.listen(process.env.PORT || 3333, () => {
  console.log(`listening the door ${process.env.PORT || 3333}`);
});
