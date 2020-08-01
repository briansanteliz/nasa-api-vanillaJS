export class Api{
    async Query(){
        const url = 'YwREkBkQFjIdfV4KtnZ7NMRK7z7lvxrm0WdLVe7N'
        const res = await fetch(url);
        return data = res.json()
    }
}