// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:richy@localhost/postgres"
})

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }

// createUsersTable();



async function insertValues(username:string, email:string, password:string){
    await client.connect()
    try{
    const query = `INSERT INTO users(username,email,password) VALUES ($1, $2, $3)`;
    const values = [username,email,password]; 
    const res = await client.query(query,values);
    console.log('Insertion result',res);
    }
    catch(err){
        console.log(err);
    }
    finally{
        await client.end();
    }

}

insertValues("Richy","abrahamrichard@gmail.com","1234" );