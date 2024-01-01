import { PrismaClient } from "@prisma/client"

const client = global.prismadb || new PrismaClient();
if(process.env.NODE_ENV === 'production') global.prismadb = client;

// let client

// //check if we are running in production mode
// if (process.env.NODE_ENV === "production") {
//   client = new PrismaClient()
// } else {
//   //check if there is already a connection to the database
//   if (!global.prismadb) {
//     global.prismadb = new PrismaClient()
//   }
//   client = global.prismadb
// }

export default client
