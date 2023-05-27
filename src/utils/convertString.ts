export const convertString = (text:string) => {
    const newText = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f/]/g, "").split(' ').filter(x => x !== "" && x !== "&").join('-');
    return newText
}