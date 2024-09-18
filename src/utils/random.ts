export function randomRemove(arr: string[], targetLength: number): string[] {
    let array = [...arr]

    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }    
        
    return array.slice(0, targetLength);
  }