import Database from 'better-sqlite3';
const db = new Database('database.db');
db.pragma('journal_mode = WAL');

db.exec("CREATE TABLE IF NOT EXISTS 'tickets' (ticketID TINYTEXT,title TINYTEXT,description TEXT,link TINYTEXT,priority TINYINT,timestamp BIGINT,userAgent TINYTEXT)")

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max - 0 + 1);
}

function getRandomID(){
    const idPart1A = `${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}`
    const idPart1B = `${getRandomInt(9)}`
    const idPart1 = idPart1A + idPart1B
    const idPart2A = `${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}`
    const idPart2B = `${getRandomInt(9)}`
    const idPart2 = idPart2A + idPart2B
    const idPart3A = `${getRandomInt(9)}${getRandomInt(9)}${getRandomInt(9)}`
    const idPart3B = `${getRandomInt(9)}`
    const idPart3 = idPart3A + idPart3B
    const unCleanID = `${idPart1}-${idPart2}-${idPart3}`
    const cleanID = `${unCleanID}!${idPart1B}${idPart2B}${idPart3B}`
    console.log(cleanID)
    return cleanID
}


export function ServerCreateTicket(ticket: ticketBuilder){
    const insert = db.prepare("INSERT INTO tickets (ticketID, title, description, link, priority, timestamp, userAgent) VALUES (?, ?, ?, ?, ?, ?, ?)")
    try{
        insert.run(getRandomID(),ticket.title,ticket.desc,ticket.link,ticket.priority,ticket.timestamp,ticket.userAgent)
    }catch(err){
        console.error(err)
    }
}

export function ServerGetTickets(): Array<any>{
    const row = db.prepare('SELECT * FROM tickets')
    // console.log(row.all())
    return row.all()
}

export function ServerRemoveTicketByTitle(title: string){
    // const row = db.prepare('DELETE FROM tickets')
    // row.run()
    const del = db.prepare("DELETE FROM tickets WHERE title = ?")
    del.run(title)

    // console.log(del)
}