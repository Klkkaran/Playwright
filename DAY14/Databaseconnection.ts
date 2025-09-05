//interface



export interface DatabaseConnection {
    
}
export interface con{
    connect(): void
}

export interface discon{
    disconnect() : void
}

export interface executeU{
    executeUpdate(dataquery: string) 
}


export class PlaywrightConnection implements DatabaseConnection{
    connect(): void {
        console.log("Database connected")
    }
    disconnect(): void {
        console.log("database disconnected")
    }
    executeUpdate(dataquery: string) {
        console.log(`sql query to execute ${dataquery} `)
    }
}


//abstraction
import {DatabaseConnection} from "./homeassignInterface"
abstract class MySqlConnection implements DatabaseConnection{
     abstract executeQuery(query: string): void;

}

class PlaywrightConnection extends MySqlConnection{
    connect(): void {
        console.log("Database connected")
    }
    disconnect(): void {
        console.log("database disconnected")
    }
    executeQuery(query: string): void {
        console.log(`execuete query ${query}`)
    }
    executeUpdate(dataquery: string) {
        console.log(`sql query to update ${dataquery} `)
    }
}

const play = new PlaywrightConnection()
play.connect()
play.disconnect()
play.executeQuery("select * from country")
play.executeUpdate("select distinct from country")
