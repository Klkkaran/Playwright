interface DatabaseConnection {
    connect() : void
    disconnect() : void
    executeUpdate( dataquery: string) 
}

class PlaywrightConnection implements DatabaseConnection{
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

const dataconct = new PlaywrightConnection()
dataconct.connect()
dataconct.disconnect()
dataconct.executeUpdate("select distinct from country")
