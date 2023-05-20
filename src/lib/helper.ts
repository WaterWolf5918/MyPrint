export function createBar(text = "",char ="#"){
    if (text == ""){
        let bar:Array<string>|string = []
        for (let i=0; i<process.stdout.columns -1; i++){
            bar.push(char)
        }
        bar = bar.join("")
        return bar
    }else{
        let bar:Array<string>|string = []
        const st = text
        
        for (let i=0; i<process.stdout.columns/2 -1 - st.length/2; i++){
            bar.push(char)
        }
        bar.push(st)
        for (let i=0; i<process.stdout.columns/2 -1 - st.length/2; i++){
            bar.push(char)
        }
        bar = bar.join("")
        return bar
    }
}