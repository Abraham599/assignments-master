import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */

  
export async function createTodo(userId: number, title: string, description: string) {
    try{
        const query = `INSERT INTO todos(title,description,user_id) VALUES ($1,$2,$3) RETURNING title,description,done,id`;
        const res = await client.query(query,[title,description,userId]);
        return res.rows[0];
    }
    catch(err){
        console.log(err);
    }
   
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try{
        const query = `UPDATE todos SET done = true where id=$1 RETURNING title,description,done,id`;
        const res = await client.query(query,[todoId]);
        return res.rows[0];
    }
    catch(err){
        console.log(err);
    }
    
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try{
        const query = `SELECT * FROM todos WHERE user_id=$1`;
        const res = await client.query(query,[userId]);
        return res.rows;
    }
    catch(err){
        console.log(err);
    }
   
}